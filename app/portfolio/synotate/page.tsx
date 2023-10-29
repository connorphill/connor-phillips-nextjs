import React from 'react'
import Gallery from '../../../components/Portfolio/Gallery'
import Image from 'next/image'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Synotate | Connor Phillips',
  description: 'A data analysis platform that helped businesses save time and resources by acting as a central repository of data annotations related to test results and trends found in data analysis.'
}

export default function Synotate() {
  return (    
    <div className='container mx-auto'>
      <h1 className='text-3xl lg:text-5xl py-5 font-semibold text-midnight-500'>Synotate</h1>
      <Image src="https://s3.amazonaws.com/ghost-blogpost-images/2020/11/synotate-logo.png" alt="Synotate logo" width={300}
                  height={200}
                  className='max-md:h-300 max-md:h-200 mx-auto object-cover'/>
   <section className="post-content">
      <Gallery />
      <h2 className='text-3xl lg:text-4xl text-midnight-400 font-semibold py-5' id="idea"><strong>Idea</strong></h2>
      <p>The idea for Synotate was conceived as the result of a problem my Marketing team faced at ShopKeep and expanded into a public product after discovering the problem was more common than I had expected.</p>
      <h2 className='text-3xl lg:text-4xl text-midnight-400 font-semibold py-5' id="product"><strong>Product</strong></h2>
      <p>Synotate was a data analysis platform that helped businesses save on time and resources by acting as a central repository of data annotations related to test results and trends found in data analysis.</p>
      <h2 className='text-3xl lg:text-4xl text-midnight-400 font-semibold py-5' id="thesis"><strong>Thesis</strong></h2>
      <p>The abundance of data at our disposal has led to analysis paralysis with significant knowledge gaps within organizations and a fragmented method to share knowledge about data.</p>
      <h2 className='text-3xl lg:text-4xl text-midnight-400 font-semibold py-5' id="role"><strong>Role</strong></h2>
      <p>Sole-founder and operator. Developer.</p>
      <h2 className='text-3xl lg:text-4xl text-midnight-400 font-semibold py-5' id="languages-platforms"><strong>Languages / Platforms</strong></h2>
      <div className='flex flex-col lg:flex-row space-x-2'>
        <div className='basis-1/2'>
      <h3 className='text-2xl lg:text-3xl text-gold-500 font-semibold py-5' id="languages"><strong>Languages</strong></h3>
      <ul className="bg-white p-4 border-2 border-gold-500">
            <li className="text-lg py-2">
                Node.js
            </li>
            <li className="text-lg py-2">
                React
            </li>
            <li className="text-lg py-2">
                Postgresql
            </li>
            <li className="text-lg py-2">
                Nginx
            </li>
            <li className="text-lg py-2">
                Redis
            </li>
        </ul>
        </div>
        <div className='basis-1/2'>      <h3 className='text-2xl lg:text-3xl text-gold-500 font-semibold py-5' id="platforms"><strong>Platforms</strong></h3>
      <ul className="bg-white p-4 border-2 border-gold-500">
         <li className='text-lg py-2'>AWS - Elastic Beanstalk</li>
         <li className='text-lg py-2'>AWS - Cloudfront</li>
         <li className='text-lg py-2'>AWS - S3</li>
         <li className='text-lg py-2'>AWS - Elasticache</li>
         <li className='text-lg py-2'>AWS - RDS</li>
         <li className='text-lg py-2'>DigitalOcean - Droplet</li>
      </ul>
      </div>
      </div>
      <h2 className='text-3xl lg:text-4xl text-midnight-400 font-semibold py-5' id="process">Process</h2>
      <p className='py-3'>I worked on this project at night and over the weekends for over three and a half years. A long time for a failed project that never gained much traction, but an extremely valuable journey filled mostly with educational lessons on running an online business, legal hurdles, engineering and product development. It started when I discovered a common occurrence in meetings where a question was asked related to a historical trend presented in a report and presentation with no on the spot resolution. No one would seem to have a definitive answer and time was spent searching through email, Slack and Google Drive for hints, ultimately ending up with having to re-analyzing that point in time to come to an answer.</p>
      <p className='py-3'>When you consider the amount of meetings in which this happens, you can immediately see how wasteful this lost memory is in terms of resources and money. As a result, I set out to build a platform that would centralize our data findings in one location in order for our company to easily access and share learnings, resulting in better guided business decisions going forward.</p>
      <p className='py-3'>From 2016-2018, I worked at night and on weekends, learning new frameworks and building the initial functionality, eventually arriving at the first version, but unable to launch to my team due to legal requirements and sign off from my employer to allow us to use the product internally. An unexpected roadblock that made me quickly learn how long these processes can take. Right around the start of 2019 I had clearance and finally launched the product to the team and world.</p>
      <p className='py-3'>Upon launch, I worked on selling the inclusion of this product in my teammates workflow and started to see utilization primarily for tracking campaign performance. After multiple product iterations from early feedback and a solid trajectory from launch, the usage started to decline. Upon interviewing my teammates I discovered that the difficulty with adopting the product was based on the lack of structure around what they would deem worthy of an annotation, when they should be posting and how they can automate some of the creation. This feedback made me realize that it faced the same challenges of a project management tool. The utility in project management tools is its organization and standardization, but without buy-in and habit generation, the utility will not be found.</p>
      <p className='py-3'>After trying to figure out how to tackle all of these problems, I felt burnt out by the project and decided to sunset it. I was losing more of the already finite amount of free time I had by trying to manage engineering, marketing and outreach for a product that needed more commitment and ultimately, I felt like between my teammates&apos; feedback and low customer sign ups, I was not going to be able to find product-market fit. While a disappointing way to close out a significant time commitment, the learnings will pay dividends in the future.</p>
      <h2 className='text-3xl lg:text-4xl text-midnight-400 font-semibold py-5' id="wins"><strong>Wins</strong></h2>
      <ul className='list-disc pl-5'>
         <li>First project I have ever brought from ideation to production</li>
         <li>Discovered the importance of sticking to an MVP</li>
         <li>Learned database best practices, React.js and server architecture</li>
      </ul>
      <h2 className='text-3xl lg:text-4xl text-midnight-400 font-semibold py-5' id="learnings"><strong>Learnings</strong></h2>
      <ul className='list-disc pl-5'>
         <li>Just ship it! Get feedback early and often.</li>
         <li>Stay focused on the initial problem your users have and how your product will solve that.</li>
         <li>Buy-in is extremely important. Find this before you start building anything.</li>
      </ul>
      <h2 className='text-3xl lg:text-4xl text-midnight-400 font-semibold py-5' id="associated-resources">Associated Resources</h2>
      <div className='flex'>
      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRhof8NIzZ_QSc3EXHiSMBrfzAbI4AzHUg67x_6ClDjdPg7xjn-RozkcRA2svN_M6RekVIkmx-XDmhN/embed?start=false&loop=false&delayms=3000" width="960" height="569" allowFullScreen></iframe>
      </div>
      <h2 className='text-3xl lg:text-4xl text-midnight-400 font-semibold py-5' id="associated-articles">Associated Articles</h2>
      <div className='space-y-3'>
      <figure className="flex flex-row border-2 border-gray-200">
         <a className="" href="https://www.connorphillips.com/getting-excited-about-learning-again/">
            <div className="flex flex-col p-5">
               <div className="text-xl font-semibold mb-3">Getting Excited About Learning Again</div>
               <div className="">I was a “B” student in school. I listened in class and put in enough effort toget the grades I needed, but I never put in the work outside of class to masterthe material and rise to the perfection of an “A” student. For a long time Ifelt the resentment to put in the effort was the result of the s…</div>
            </div>
         </a>
      </figure>
      <figure className="flex flex-row border-2 border-gray-200">
         <a className="" href="https://www.connorphillips.com/sharing-failure/">
            <div className="flex flex-col p-5">
               <div className="text-xl font-semibold mb-3">Sharing Failure</div>
               <div className="">&amp;gt; “Success consists of going from failure to failure without loss of enthusiasm.”-Winston Churchill In my previous post, I briefly wrote about coming to terms with startup failure[/admitting-failure/] and moving forward. Today, I would like to share what itwas like to share that failure. Failur…</div>
            </div>
         </a>
      </figure>
      <figure className="flex flex-row border-2 border-gray-200">
         <a className="" href="https://www.connorphillips.com/admitting-failure/">
            <div className="flex flex-col p-5">
               <div className="text-xl font-semibold mb-3">Admitting Failure</div>
               <div className="">After close to seven months of working on Synotate I am shutting the product down and going back to the drawing board. Admittingdefeat is never easy and my decision to shut the product down is a difficult oneI have made, but I have come to terms with this failure and hav…</div>
            </div>
         </a>
      </figure>
      <figure className="flex flex-row border-2 border-gray-200">
         <a className="" href="https://www.connorphillips.com/early-stage-perception-vs-reality/">
            <div className="flex flex-col p-5">
               <div className="text-xl font-semibold mb-3">Early Stage Perception vs Reality</div>
               <div className="">Before I launched Synotate I dreamt that it would be a home run right out of the gate. I blindly led myselfto believe that the proble…</div>
            </div>
         </a>
      </figure>
      <figure className="flex flex-row border-2 border-gray-200">
         <a className="" href="https://www.connorphillips.com/development-cost-expectations-for-launching-a-technology-startup/">
            <div className="flex flex-col p-5">
               <div className="text-xl font-semibold mb-3">Development Cost Expectations for Launching a Technology Startup</div>
               <div className="">Starting a technology business is more capital intensive than most might be ledto believe. While it is true that a business can be started with as little as afree Wordpress website, most business ideas have a unique product ideas that gobeyond the functionality that a basic content management sys…</div>
            </div>
         </a>
      </figure>
      <figure className="flex flex-row border-2 border-gray-200">
         <a className="" href="https://www.connorphillips.com/not-having-customers-sucks-but-feedback-is-key/">
            <div className="flex flex-col p-5">
               <div className="text-xl font-semibold mb-3">Not Having Customers Sucks, But Feedback is Key</div>
               <div className="">I am coming up on a month since launching Synotate and while I have my first non-paying customer, whom I work for, and one s…</div>
            </div>
         </a>
      </figure>
      <figure className="flex flex-row border-2 border-gray-200">
         <a className="" href="https://www.connorphillips.com/just-launch-it/">
            <div className="flex flex-col p-5">
               <div className="text-xl font-semibold mb-3">Just Launch It</div>
               <div className="">Anyone who has been obsessed with launching a startup has come across contentthat emphasizes the importance of shipping a product as soon as you can. It isthe product of the popular Lean Startup movement called minimal viable product(MVP) and makes complete sense because if the concept doesn’t se…</div>
            </div>
         </a>
      </figure>
      </div>
   </section>
</div>
  )
}
