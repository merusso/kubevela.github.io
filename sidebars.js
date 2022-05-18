const { Component } = require('react');

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['getting-started/introduction', 'install', 'quick-start'],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      collapsed: false,
      items: [
        'getting-started/core-concept',
        'getting-started/definition',
        'getting-started/architecture',
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Artifacts',
          collapsed: false,
          items: [
            'tutorials/webservice',
            'tutorials/helm',
            'tutorials/k8s-object',
            'tutorials/consume-cloud-services',
            'end-user/components/more',
          ],
        },
        'case-studies/multi-cluster',
        {
          type: 'category',
          label: 'CI Integration',
          collapsed: false,
          items: [
            'tutorials/jenkins',
            'tutorials/trigger',
            'case-studies/gitops',
          ],
        },
        {
          'How-to manage the cloud resources': [
            'end-user/components/cloud-services/provision-and-consume-cloud-services',
            'end-user/components/cloud-services/provision-and-initiate-database',
            'end-user/components/cloud-services/secure-your-database-connection',
            'end-user/components/cloud-services/provision-an-RDS-instance-with-more-than-one-database',
          ],
        },
        {
          'How-to manage the applications': [
            'how-to/dashboard/application/create-application',
            'how-to/dashboard/application/bind-new-environment',
            'tutorials/workflows',
            'how-to/dashboard/application/deploy-application',
            'how-to/dashboard/application/get-application-instance',
            'tutorials/scaler',
            'how-to/dashboard/application/get-application-log',
            'how-to/dashboard/application/get-application-endpoint',
            'how-to/dashboard/application/view-application-resource',
            'how-to/dashboard/application/get-application-revision',
            'how-to/dashboard/application/recycle-environment',
            'how-to/dashboard/application/delete-application',
          ],
        },
        {
          'Day-2 Operations': [
            'end-user/traits/rollout',
            'end-user/traits/ingress',
            'end-user/traits/service-binding',
            'end-user/traits/sidecar',
            'end-user/policies/health',
            'end-user/workflow/webhook-notification',
            'how-to/dashboard/trigger/overview',
            'end-user/traits/more',
          ],
        },
        {
          'Manage integration configs': [
            'how-to/dashboard/config/dex-connectors',
            'how-to/dashboard/config/helm-repo',
          ],
        },
        {
          'Advanced Features': [
            'end-user/workflow/component-dependency-parameter',
            'end-user/version-control',
            'end-user/policies/apply-once',
            'end-user/policies/gc',
            'end-user/service-account-integration',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Operator Manual',
      items: [
        'tutorials/sso',
        'how-to/dashboard/user/user',
        'how-to/dashboard/user/rbac',
        'how-to/dashboard/user/project',
        {
          'Manage resource': [
            'platform-engineers/system-operation/managing-clusters',
            'how-to/dashboard/target/overview',
          ],
        },
        'how-to/cli/addon/addon',
        {
          'Install or upgrade': [
            'platform-engineers/system-operation/bootstrap-parameters',
            'platform-engineers/advanced-install',
            'platform-engineers/system-operation/offline-installation',
          ],
        },
        'platform-engineers/system-operation/observability',
        'platform-engineers/system-operation/performance-finetuning',
        {
          type: 'category',
          label: 'Extension',
          collapsed: true,
          items: [
            {
              'Learning CUE': [
                'platform-engineers/cue/basic',
                'platform-engineers/cue/definition-edit',
                'platform-engineers/cue/advanced',
              ],
            },
            {
              Addons: ['platform-engineers/addon/intro'],
            },
            'platform-engineers/components/custom-component',
            {
              'Cloud Resources': [
                'platform-engineers/addon/terraform',
                'platform-engineers/components/component-terraform',
              ],
            },
            {
              type: 'category',
              label: 'Traits System',
              items: [
                'platform-engineers/traits/customize-trait',
                'platform-engineers/traits/patch-trait',
                'platform-engineers/traits/status',
                'platform-engineers/traits/advanced',
              ],
            },
            {
              'Workflow System': [
                'platform-engineers/workflow/workflow',
                'platform-engineers/workflow/cue-actions',
                'platform-engineers/workflow/working-mechanism',
              ],
            },
            'platform-engineers/system-operation/velaql',
            'platform-engineers/debug/dry-run',
            'platform-engineers/debug/debug',
            'platform-engineers/x-def-version',
          ],
        },
      ],
    },
    'contributor/overview',
    {
      type: 'category',
      label: 'References',
      items: [
        'cli/vela',
        'platform-engineers/oam/x-definition',
        'end-user/components/references',
        'end-user/traits/references',
        'end-user/policies/references',
        'end-user/workflow/built-in-workflow-defs',
        {
          type: 'category',
          label: 'Official Addons',
          items: [
            'reference/addons/overview',
            'reference/addons/velaux',
            'reference/addons/terraform',
            'reference/addons/ai',
            'reference/addons/traefik',
          ],
        },
        'end-user/components/cloud-services/cloud-resources-list',
        'reference/ui-schema',
        'reference/user-improvement-plan',
        {
          label: 'VelaUX API Doc',
          type: 'link',
          href: 'https://kubevela.stoplight.io/docs/kubevela/b3A6NDI5NzQxMzM-detail-definition',
        },
      ],
    },
    {
      type: 'category',
      label: 'Roadmap',
      items: ['roadmap/README'],
    },
    {
      type: 'doc',
      id: 'developers/references/devex/faq',
    },
  ],
};
