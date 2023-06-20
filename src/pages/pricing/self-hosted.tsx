import React, { useState } from 'react';
import './pricing.css';
import { PricingToggle } from '../../component/pricing/PricingToggle';
import { PricingBase } from '../../component/pricing/PricingBase';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { PricingPlan } from '../../component/pricing/PricingPlan';
import { RoboMouse } from '../../component/images/RoboMouse';

export default function SelfHosted() {
  const [billing, setBilling] = useState<'monthly' | 'annually'>('annually');

  const toggleBilling = () => {
    setBilling((val) => (val === 'annually' ? 'monthly' : 'annually'));
  };

  return (
    <PricingBase>
      <div className="pricing__toggle">
        <PricingToggle value="self-hosted" />
        <Head>
          <meta
            name="description"
            content="Pricing options for self-hosted Tolgee version. Support option for businesses that need high reliability and require professional support."
          />
        </Head>
      </div>

      <div className="pricing__top-right-robomouse">
        <RoboMouse />
      </div>
      <div className="pricing__bottom-right-robomouse">
        <RoboMouse />
      </div>

      <div className="pricing__options-wrapper">
        <div className="pricing__option">
          <PricingPlan
            name="Free"
            price={0}
            description={
              <>
                Have your localization data exactly where you want it. Since
                Tolgee is open-source, self-hosting will be <b>free forever</b>.
              </>
            }
            features={[
              'in-context-translating',
              'translation-memory',
              'machine-translations',
              'auto-translation',
              'activity-log',
              'one-click-screenshots',
              'figma-plugin',
            ]}
            featuresHeight={'270px'}
            action={
              <Link
                className="pricing__option-button pricing__option-button--grey"
                to="/platform/self_hosting/running_with_docker"
              >
                Docs
              </Link>
            }
          />
        </div>

        <div className="pricing__option pricing__option--highlighted">
          <PricingPlan
            name="Business"
            description="Self-host your localization project anywhere you prefer. Designed for individuals and medium teams."
            billing={{ monthly: 300, annually: 250 }}
            billingType={billing}
            toggleBillingType={toggleBilling}
            limits={{
              strings: Infinity,
              seats: 10,
            }}
            features={[
              'all-from-free',
              'granular-permissions',
              'prioritized-feature-requests',
              'standard-support',
              'cdn',
              'webhooks',
            ]}
            featuresHeight={'270px'}
            secondaryPrices={[`+ €${(20).toLocaleString()}/mo for extra seat`]}
            action={
              <Link
                className="pricing__option-button pricing__option-button--contained"
                to="https://app.tolgee.io/billing-self-hosted"
              >
                Subscribe
              </Link>
            }
          />
        </div>

        <div className="pricing__option">
          <PricingPlan
            name="Enterprise"
            description={
              <>
                Setup Tolgee in your own infrastructure. Designed for enterprise
                organizations and large teams, with <b>premium support</b>.
              </>
            }
            billingType={billing}
            toggleBillingType={toggleBilling}
            limits={{
              strings: Infinity,
              seats: Infinity,
            }}
            features={[
              'all-from-business',
              'account-manager',
              'premium-support',
              'dedicated-slack-channel',
              'deployment-assistance',
              'assisted-updates',
              'backup-configuration',
              'team-training',
            ]}
            featuresHeight={'270px'}
            action={
              <Link
                className="pricing__option-button pricing__option-button--grey"
                to="mailto:info@tolgee.io"
              >
                Contact us
              </Link>
            }
          />
        </div>
      </div>
    </PricingBase>
  );
}
