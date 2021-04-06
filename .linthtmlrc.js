/**
 * @see [linthtml](https://github.com/linthtml/linthtml/blob/develop/docs/rules.md)
 */
module.exports = {
  'attr-name-ignore-regex': false,

  'attrs-bans': [
    'error',
    [
      'align',
      'background',
      'bgcolor',
      'border',
      'frameborder',
      'longdesc',
      'marginwidth',
      'marginheight',
      'scrolling',
      'style',
      'width',
    ],
  ],

  'id-class-ignore-regex': false,

  'line-max-len-ignore-regex': false,

  maxerr: false,

  'raw-ignore-regex': false,

  rules: {
    // 'attrs-bans': [
    //   'error',
    //   [
    //     'align',
    //     'background',
    //     'bgcolor',
    //     'border',
    //     'frameborder',
    //     'longdesc',
    //     'marginwidth',
    //     'marginheight',
    //     'scrolling',
    //     'style',
    //     'width',
    //   ],
    // ],

    'class-style': ['error', 'bem'],
    'indent-style': [true, 'spaces'],
    'indent-width': ['error', 2],
  },

  'spec-char-escape': false,
  'text-ignore-regex': false,
};
