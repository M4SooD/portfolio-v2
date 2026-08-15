import { existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { projects } from '@/constants/work';

describe('portfolio project data', () => {
  it('keeps project ordering and identifiers unique', () => {
    expect(projects).toHaveLength(8);
    expect(new Set(projects.map(({ num }) => num)).size).toBe(projects.length);
    expect(projects.map(({ num }) => num)).toEqual([
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
    ]);
  });

  it('uses the public RBTex brand name and website', () => {
    expect(projects[0]).toMatchObject({
      title: 'RBTex',
      live: 'https://rbtex.com/',
    });
    expect(projects.some(({ title }) => title.includes('Arbitex'))).toBe(false);
  });

  it('provides a live site and local image for each professional case study', () => {
    const professionalProjects = projects.filter(({ kind }) => kind === 'professional');
    expect(professionalProjects).toHaveLength(4);

    for (const project of professionalProjects) {
      expect(project.live).toMatch(/^https:\/\//);
      expect(project.image).toMatch(/^\/assets\/work\//);

      const assetPath = join(process.cwd(), 'public', project.image!);
      expect(existsSync(assetPath), `${project.title} image is missing`).toBe(true);
      expect(statSync(assetPath).size).toBeGreaterThan(10_000);
    }
  });
});
