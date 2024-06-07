/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  networksSidebar: [{ type: 'autogenerated', dirName: 'networks' }],
  standardsSidebar: [{ type: 'autogenerated', dirName: 'standards' }],
  learnSidebar: [{ type: 'autogenerated', dirName: 'learn' }],
  contractsSidebar: [
    'contracts/introduction',
    // divider for the main smart contracts
    { type: 'html', value: '<hr/>', defaultStyle: false },
    {
      type: 'category',
      label: 'Smart Contracts',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'contracts/overview',
        },
      ],
    },
    // divider for the Contracts ABI and Libraries Technical references
    { type: 'html', value: '<hr/>', defaultStyle: false },
    {
      type: 'category',
      label: '📑 ABI Technical Reference',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'contracts/contracts',
        },
      ],
    },
    {
      type: 'category',
      label: '📒 Solidity Libraries',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'contracts/libraries',
        },
      ],
    },
    // divider for the Libraries Technical references
    { type: 'html', value: '<hr/>', defaultStyle: false },
    'contracts/interface-ids',
    'contracts/type-ids',
    {
      type: 'link',
      label: 'Audits',
      href: 'https://github.com/lukso-network/lsp-smart-contracts/tree/develop/audits',
    },
  ],
  toolsSidebar: [
    'tools/getting-started',
    'tools/integrations/partners',
    {
      type: 'category',
      label: '📜 erc725.js',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'tools/erc725js',
        },
      ],
    },
    {
      type: 'category',
      label: '🏭 lsp-factory.js',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'tools/lsp-factoryjs',
        },
      ],
    },
    {
      type: 'category',
      label: '🖋️ eip191-signer.js',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'tools/eip191-signerjs',
        },
      ],
    },
    {
      type: 'category',
      label: '📑 lsp-smart-contracts',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'tools/lsp-smart-contracts',
        },
      ],
    },
    {
      type: 'category',
      label: '📑 lsp-utils',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'tools/lsp-utils',
        },
      ],
    },
    'tools/erc725-tools',
    'tools/relayer-developer',
    'tools/indexer',
    'tools/docker-factory',
  ],
  faqSidebar: [{ type: 'autogenerated', dirName: 'faq' }],
};
