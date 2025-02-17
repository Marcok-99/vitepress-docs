module.exports = [
  {
    text: '',
    collapsable: false,
    items: [
      { text: 'Versions', link: '/reference/airnode/latest/' },
      {
        text: 'Airnode Contract Addresses',
        link: '/reference/airnode/latest/airnode-addresses',
      },
      {
        text: 'Cloud Resources',
        link: '/reference/airnode/latest/cloud-resources',
      },
      {
        text: 'Chain Idiosyncrasies',
        link: '/reference/airnode/latest/chain-idiosyncrasies',
      },
      {
        text: 'Migration Guide',
        link: '/reference/airnode/latest/migration',
      },
    ],
  },
  {
    text: 'Understanding Airnode',
    collapsible: true,
    collapsed: false,
    items: [
      {
        text: 'Overview',
        link: '/reference/airnode/latest/understand/',
      },
      {
        text: 'API Integration',
        link: '/reference/airnode/latest/understand/api-integration',
      },
      {
        text: 'API Security',
        link: '/reference/airnode/latest/understand/api-security',
      },
      {
        text: 'Configuring Airnode',
        link: '/reference/airnode/latest/understand/configuring',
      },

      {
        text: 'Using Authorizers',
        link: '/reference/airnode/latest/understand/apply-auth',
      },
      {
        text: 'Using Authorizations',
        link: '/reference/airnode/latest/understand/using-authorizations',
      },
      {
        text: 'Heartbeat',
        link: '/reference/airnode/latest/understand/heartbeat',
      },
      {
        text: 'HTTP Gateways',
        link: '/reference/airnode/latest/understand/http-gateways',
      },
      {
        text: 'Deploying Airnode',
        link: '/reference/airnode/latest/understand/deploying',
      },
    ],
  },
  {
    text: 'Docker Images',
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: 'Overview',
        link: '/reference/airnode/latest/docker/',
      },
      {
        text: 'AWS/GCP Deployer Image',
        link: '/reference/airnode/latest/docker/deployer-image',
      },
      {
        text: 'Client Image',
        link: '/reference/airnode/latest/docker/client-image',
      },
      {
        text: 'Admin CLI Image',
        link: '/reference/airnode/latest/docker/admin-cli-image',
      },
    ],
  },
  {
    text: 'Concepts and Definitions',
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: 'Request-Response Protocol',
        link: '/reference/airnode/latest/concepts/',
      },
      {
        text: 'Airnode',
        link: '/reference/airnode/latest/concepts/airnode',
      },
      {
        text: 'Endpoint',
        link: '/reference/airnode/latest/concepts/endpoint',
      },
      {
        text: 'Authorizers',
        link: '/reference/airnode/latest/concepts/authorizers',
      },
      {
        text: 'Authorizations',
        link: '/reference/airnode/latest/concepts/authorizations',
      },
      {
        text: 'Airnode Authentication',
        link: '/reference/airnode/latest/concepts/airnode-auth',
      },
      {
        text: 'Relayed Meta Data Authentication',
        link: '/reference/airnode/latest/concepts/relay-meta-auth',
      },
      {
        text: 'Requester',
        link: '/reference/airnode/latest/concepts/requester',
      },
      {
        text: 'Sponsor',
        link: '/reference/airnode/latest/concepts/sponsor',
      },
      {
        text: 'Requests and Sponsors',
        link: '/reference/airnode/latest/concepts/requesters-sponsors',
      },
      {
        text: 'Template',
        link: '/reference/airnode/latest/concepts/template',
      },
      {
        text: 'Request',
        link: '/reference/airnode/latest/concepts/request',
      },
      {
        text: 'Chain Providers',
        link: '/reference/airnode/latest/concepts/chain-providers',
      },
      {
        text: 'Gas Price Strategies',
        link: '/reference/airnode/latest/concepts/gas-prices',
      },
      {
        text: 'Fees',
        link: '/reference/airnode/latest/concepts/fees',
      },
    ],
  },
  {
    text: 'Specifications',
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: 'Oracle Integration (OIS)',
        link: '/reference/airnode/latest/specifications/ois',
      },
      {
        text: 'Airnode ABI',
        link: '/reference/airnode/latest/specifications/airnode-abi',
      },
      {
        text: 'Reserved Parameters',
        link: '/reference/airnode/latest/specifications/reserved-parameters',
      },
    ],
  },
  {
    text: 'Packages',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Overview', link: '/reference/airnode/latest/packages/' },
      { text: 'Adapter', link: '/reference/airnode/latest/packages/adapter' },
      {
        text: 'Airnode ABI',
        link: '/reference/airnode/latest/packages/airnode-abi',
      },
      {
        text: 'Admin CLI',
        link: '/reference/airnode/latest/packages/admin-cli',
      },
      { text: 'Deployer', link: '/reference/airnode/latest/packages/deployer' },
      {
        text: 'Validator',
        link: '/reference/airnode/latest/packages/validator',
      },
    ],
  },
  {
    text: 'Deployment Files',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Overview', link: '/reference/airnode/latest/deployment-files/' },

      {
        text: 'config.json',
        link: '/reference/airnode/latest/deployment-files/config-json',
      },
      {
        text: 'secrets.env',
        link: '/reference/airnode/latest/deployment-files/secrets-env',
      },
      {
        text: 'aws.env',
        link: '/reference/airnode/latest/deployment-files/aws-env',
      },
      {
        text: 'receipt.json',
        link: '/reference/airnode/latest/deployment-files/receipt-json',
      },
      {
        text: 'Examples',
        items: [
          {
            text: 'config.json',
            link: '/reference/airnode/latest/deployment-files/examples/config-json',
          },
          {
            text: 'secrets.env',
            link: '/reference/airnode/latest/deployment-files/examples/secrets-env',
          },
          {
            text: 'aws.env',
            link: '/reference/airnode/latest/deployment-files/examples/aws-env',
          },
        ],
      },
      {
        text: 'Templates',
        items: [
          {
            text: 'OIS Object',
            link: '/reference/airnode/latest/deployment-files/templates/ois-json',
          },
          {
            text: 'config.json',
            link: '/reference/airnode/latest/deployment-files/templates/config-json',
          },
          {
            text: 'secrets.env',
            link: '/reference/airnode/latest/deployment-files/templates/secrets-env',
          },
          {
            text: 'aws.env',
            link: '/reference/airnode/latest/deployment-files/templates/aws-env',
          },
          {
            text: 'gcp.json',
            link: '/reference/airnode/latest/deployment-files/templates/gcp-json',
          },
        ],
      },
    ],
  },
];
