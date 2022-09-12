import { useBoolean } from '@literal-ui/hooks'
import { NextSeo } from 'next-seo'

import { OpenApp } from '../layout'

export default function Pricing() {
  const [annual, toggle] = useBoolean(false)
  return (
    <>
      <NextSeo title="Pricing" />
      <div className="">
        <div className="flex flex-col items-center py-16">
          <h2 className="typescale-headline-medium">Pricing Plans</h2>
          <div>
            <label className="text-on-surface-variant typescale-title-medium my-8 flex select-none items-center gap-2">
              <input
                type="checkbox"
                checked={annual}
                onChange={toggle}
                className="h-[18px] w-[18px]"
              />
              Yearly
            </label>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <Plan
              name="Free"
              privileges={[
                'PWA',
                'Tabs',
                'Search',
                'Image Preview',
                'Annotation',
                'Custom Typography',
              ]}
              description="Free includes"
              price={0}
              annual={annual}
            />
            <Plan
              name="Premium"
              privileges={['10GB Cloud Storage', 'Data Synchronization']}
              description="Everything in Free, plus"
              price={2}
              annual={annual}
            />
          </div>
        </div>

        <div className="container py-16">
          <h2 className="typescale-headline-medium mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <QA q="Can I get refund?" a="Sorry, we do not support refunds." />
            <QA
              q="Can I cancel my subscription?"
              a="Yes, you can cancel your subscription at any time, after which we will not charge you again until you resume your subscription."
            />
            <QA
              q="Will the data saved in the cloud be deleted after I cancel my subscription?"
              a="No, but you will not be able to use the data synchronization feature."
            />
          </div>
        </div>
      </div>
    </>
  )
}

interface PlanProps {
  name: string
  privileges: string[]
  description: string
  price: number
  annual?: boolean
}
const Plan: React.FC<PlanProps> = ({
  name,
  privileges,
  description,
  price,
  annual = false,
}) => {
  return (
    <div className="bg-outline/5 flex w-64 flex-col gap-8 p-8">
      <h2 className="typescale-title-large text-center">{name}</h2>
      <div className="text-center">
        <span className="typescale-display-large mr-1">
          ${annual ? price * 10 : price}
        </span>
        <span className="text-outline">/{annual ? 'year' : 'month'}</span>
      </div>

      <OpenApp>Get Started</OpenApp>

      <div className="typescale-body-large">
        <div className="text-outline">{description}</div>
        <ul className="text-on-surface mt-3 space-y-1">
          {privileges.map((p) => (
            <li key={p} className="flex items-center">
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

interface QAProps {
  q: string
  a: string
}
const QA: React.FC<QAProps> = ({ q, a }) => {
  return (
    <div className="typescale-body-large">
      <h2 className="typescale-title-large mb-2">{q}</h2>
      <p className="text-outline">{a}</p>
    </div>
  )
}
