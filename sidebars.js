/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  'Language': [
  	'Language/README',
  	{
  		type: 'category',
  		label: 'Java Data Structure',
  		items: [
        'Language/Java/README',
    		'Language/Java/list',
    		'Language/Java/map'
    	]
  	}
  ],
  'Data Structure': [
  	'DataStructure/README',
  	{
  		type: 'category',
  		label: 'Advanced',
  		items:['DataStructure/Advanced/vlist']
  	}
  ],
  'Patterns': [
  	'Patterns/README',
  	{
  		type: 'category',
  		label: 'Backtracking',
  		items: [
  			'Patterns/Backtracking/README',
  			'Patterns/Backtracking/Permutation',
  			'Patterns/Backtracking/ExpressionPuzzle',
		  ]
  	},
    {
      type: 'category',
      label: 'Bit Manipulation',
      items: [
        'Patterns/BitManipulation/README'
      ]
    }
  ]
};

// module.exports = {
//   someSidebar: {
//     Docusaurus: ['doc1', 'doc2', 'doc3'],
//     Features: ['mdx'],
//   },
// };
