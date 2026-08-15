module.exports = {
  ci: {
    collect: {
      url: [
        'http://127.0.0.1:3100/',
        'http://127.0.0.1:3100/work',
        'http://127.0.0.1:3100/resume',
        'http://127.0.0.1:3100/contact',
      ],
      numberOfRuns: 2,
      startServerCommand:
        'npm run start -- --hostname 127.0.0.1 --port 3100',
      startServerReadyPattern: 'Ready',
      startServerReadyTimeout: 30000,
      settings: {
        chromeFlags: '--headless=new --no-sandbox',
      },
    },
    assert: {
      assertions: {
        'categories:performance': [
          'error',
          { minScore: 0.9, aggregationMethod: 'median-run' },
        ],
        'categories:accessibility': ['error', { minScore: 1 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 1 }],
        'first-contentful-paint': [
          'error',
          { maxNumericValue: 2000, aggregationMethod: 'median-run' },
        ],
        'largest-contentful-paint': [
          'error',
          { maxNumericValue: 3000, aggregationMethod: 'median-run' },
        ],
        'total-blocking-time': [
          'error',
          { maxNumericValue: 200, aggregationMethod: 'median-run' },
        ],
        'cumulative-layout-shift': [
          'error',
          { maxNumericValue: 0.1, aggregationMethod: 'median-run' },
        ],
        'errors-in-console': ['error', { maxLength: 0 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './lighthouse-artifacts',
    },
  },
};
