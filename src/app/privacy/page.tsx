import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Multiple glow circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glow circle 1 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '10%',
            left: '15%',
            zIndex: 0
          }}
        />
        {/* Glow circle 2 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '29%',
            right: '20%',
            zIndex: 0
          }}
        />
        {/* Glow circle 3 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '1000px',
            height: '1000px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '45%',
            left: '8%',
            zIndex: 0
          }}
        />
        {/* Glow circle 4 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(120px)',
            top: '60%',
            right: '12%',
            zIndex: 0
          }}
        />
        {/* Glow circle 5 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '900px',
            height: '900px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 100%)',
            filter: 'blur(120px)',
            top: '75%',
            left: '25%',
            zIndex: 0
          }}
        />
        {/* Glow circle 6 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '85%',
            right: '30%',
            zIndex: 0
          }}
        />
        {/* Glow circle 7 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '750px',
            height: '750px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '15%',
            left: '60%',
            zIndex: 0
          }}
        />
      </div>

      <Header />
      
      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            How we collect, use, and protect your personal information.
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-800">
          <div className="prose prose-invert prose-lg max-w-none">
            
            {/* General */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">General</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">1.1</h3>
                <p className="text-gray-300 mb-4">
                  Best Version 1 LLC, headquartered at Miami, Florida, USA ("we", "us" and "our") takes the privacy rights of users of the BESTVERSION1.COM platform, applications, and website ("Site") seriously. We are the data controller and we will process your personal data in accordance with relevant data protection regulations and laws.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">1.2</h3>
                <p className="text-gray-300 mb-4">
                  This privacy policy explains how we process personal data when you use the BESTVERSION1.COM platform as a registered user, visit our website, or use our applications. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">1.3</h3>
                <p className="text-gray-300">
                  If you are one of our suppliers or a non-registered user, please see sections 5 and 7 of this policy which provide specific details regarding how we process your personal data.
                </p>
              </div>
            </section>

            {/* Your Data */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Your Data</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">2.1</h3>
                <p className="text-gray-300">
                  For the purposes of this privacy policy, "Your Data" means any information about you from which you are personally identifiable, including without limitation your name, address, role, email address, and mobile telephone number (and where applicable, your login name and password) and other information from which you can be identified (such as practices or sessions you create, video footage, or photographs) which you (or a third party) may disclose to us via our Site or applications at any time.
                </p>
              </div>
            </section>

            {/* How We Collect Your Data */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">How We Collect Your Data</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">3.1</h3>
                <p className="text-gray-300 mb-4">
                  We may collect and process Your Data in the following circumstances:
                </p>
                <ul className="list-decimal list-inside text-gray-300 mb-4 ml-6 space-y-2">
                  <li>whenever you visit BESTVERSION1.COM. We may collect details of your visits including, but not limited to, traffic data, location data, and other communication data and the resources you access;</li>
                  <li>when you register to use BESTVERSION1.COM;</li>
                  <li>whenever you or a third party provide Your Data on an online form on BESTVERSION1.COM (for example, when you create practices, sessions, link video, images, and other material via mobile applications, when you enter competitions or free prize draws, etc.);</li>
                  <li>whenever you provide Your Data to us when reporting a problem with BESTVERSION1.COM, making a complaint, making an enquiry or contacting us for any other reason;</li>
                  <li>whenever you complete one of our voluntary surveys that we use for research purposes; and</li>
                  <li>whenever you disclose Your Data to us, or we collect Your Data from you, in any other way, through BESTVERSION1.COM or otherwise.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">3.2</h3>
                <p className="text-gray-300 mb-4">
                  We may also collect data in the following ways:
                </p>
                <div className="ml-6 space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">3.2.1 IP Address</h4>
                    <p className="text-gray-300">
                      We may collect information about your device, including your Internet Protocol address, for reasons of fraud protection. We may also collect information about your device's operating system and browser type, for system administration and to report aggregate information to our advertisers. This is statistical data about our users' browsing actions and patterns and does not identify any individual.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">3.2.2 Cookies</h4>
                    <p className="text-gray-300">
                      Our Site uses cookies to distinguish you from other users of our Site. This helps us to provide you with a good experience when you browse our Site and also allows us to improve our Site.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">How We Use Your Information</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">4.1</h3>
                <p className="text-gray-300 mb-4">
                  We use Your Data for our own legitimate interests, in order to:
                </p>
                <ul className="list-decimal list-inside text-gray-300 mb-4 ml-6 space-y-2">
                  <li>monitor, develop and improve BESTVERSION1.COM and your experience and ensure that content of BESTVERSION1.COM is presented in the most effective manner for you and for your computer or device;</li>
                  <li>process your registration to use BESTVERSION1.COM and provide you with a username and password;</li>
                  <li>provide you with information, products, or services that you request from us;</li>
                  <li>ensure the security of your account;</li>
                  <li>allow you to participate in interactive features of our service, should you choose to do so;</li>
                  <li>notify you about changes to our service;</li>
                  <li>process and deal with any complaints or enquiries made by you;</li>
                  <li>investigate any suspected breach of the terms of service by or otherwise relating to you; and</li>
                  <li>contact you for marketing purposes.</li>
                </ul>
              </div>
            </section>

            {/* Non-Registered User Data */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Non-Registered User Data</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">5.1</h3>
                <p className="text-gray-300">
                  Where you do not have an account with us and your personal data is uploaded to a team or club by a third party, we will not share your personal data. We do not share or syndicate personal data relating to children under the age of 14. You have the right to object to us using Your Data in this way at any time by contacting us using the details in section 18 of this policy in addition to your other rights set out in section 15.
                </p>
              </div>
            </section>

            {/* Retention of Your Data */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Retention of Your Data</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">6.1</h3>
                <p className="text-gray-300 mb-4">
                  Where you are a registered user of the Site, subject to exercising your rights detailed in section 15 of this policy, we retain Your Data for as long as you remain an active user of your account. Where there has not been any activity on your account for three years we will contact you to check you still wish to retain your account with us. Where you decide to cancel your account or we do not hear further from you, your account will be de-activated and Your Data will be deleted. Where you have subscribed to receive marketing correspondence from us, we will keep your personal data for marketing purposes whilst your account remains active and for the period of time referred to above. This is subject to exercising your right to unsubscribe from receiving such correspondence at any time.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">6.2</h3>
                <p className="text-gray-300">
                  Where you are a non-registered user or a registered user whose personal data has been uploaded to a team or club, we will store Your Data on our software for the benefit of your club for as long as your club requires (we do not use this information for our own purposes). For details on how long Your Data is retained by your club, please contact your club directly.
                </p>
              </div>
            </section>

            {/* Supplier Data */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Supplier Data</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">7.1</h3>
                <p className="text-gray-300">
                  We will collect details such as a contact name, email address, telephone number, and bank details in order to contact you about goods and/or services we have ordered from you, to place further orders and to pay you for the goods or services supplied. We may share your data with our employees to manage our relationship with you and we will keep the personal data for as long as we require your goods and services and for a period of 6 years further to being provided with the goods/services. You may exercise any of the rights referred to in section 15 of this policy in relation to your personal data.
                </p>
              </div>
            </section>

            {/* If You Fail to Provide Personal Data */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">If You Fail to Provide Personal Data</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">8.1</h3>
                <p className="text-gray-300">
                  Where we need to collect personal data by law or under the terms of a contract we have with you and you fail to provide the data when requested, we may not be able to perform the contract we have or are trying to enter into with you (for example, to provide you with our goods or services). In this case, we may have to cancel a product or service you have with us but we will notify you if this is the case at the time.
                </p>
              </div>
            </section>

            {/* Marketing */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Marketing</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">9.1</h3>
                <p className="text-gray-300 mb-4">
                  In addition to the uses described in sections 2 to 7 above, we may also use Your Data for our legitimate interests including for marketing, market research, and related purposes, such as:
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">9.2</h3>
                <p className="text-gray-300 mb-4">
                  providing you with information about our products and services, or related products and services via email/post/telephone/text which may be of interest to you;
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">9.3</h3>
                <p className="text-gray-300 mb-4">
                  asking you to participate in market research, for example, surveys about topical issues, our services, and products. We will always try to tell you before you participate in a survey how any information you provide in the survey will be used.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">9.4</h3>
                <p className="text-gray-300 mb-4">
                  Where we have your consent, we may use your data to market the services and products of sports-focused brands and ask you to participate in related market research via email/post/telephone/text which may be of interest to you.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">9.5</h3>
                <p className="text-gray-300 mb-4">
                  We will always inform you before collecting Your Data if we intend to use Your Data for marketing, market research, and related purposes. Where we intend to use Your Data for the marketing of services and products of third-party organisations and/or disclose Your Data to any third party for such purposes, we will obtain your prior consent.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">9.6</h3>
                <p className="text-gray-300 mb-4">
                  Your right to opt-out - You have a right to opt-out of receiving any marketing information (from ourselves and/or a third party) at any time. To opt-out of receiving such information you can:
                </p>
                <ul className="list-decimal list-inside text-gray-300 mb-4 ml-6 space-y-2">
                  <li>amend your preferences accordingly in your online account; or</li>
                  <li>use the facility contained in any marketing communication you receive; or</li>
                  <li>email us at{' '}
                    <a href="mailto:team@bestversion1.com" className="text-blue-400 hover:text-blue-300 underline">
                      team@bestversion1.com
                    </a>
                  </li>
                </ul>
                <p className="text-gray-300">
                  where you have subscribed to receive marketing correspondence from us, we will keep personal data for the period set out in section 6.1 of this policy.
                </p>
              </div>
            </section>

            {/* Disclosure of Your Data to Third Parties */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Disclosure of Your Data to Third Parties</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">10.1</h3>
                <p className="text-gray-300 mb-4">
                  In addition to the third parties mentioned above, we may disclose Your Data to third parties for our legitimate interests as follows:
                </p>
                <ul className="list-decimal list-inside text-gray-300 mb-4 ml-6 space-y-2">
                  <li>to our employees and agents to administer your online account;</li>
                  <li>to payment providers to process online payments for our goods and/or services;</li>
                  <li>IT software providers that host our website, store data, and provide other software services on our behalf;</li>
                  <li>to reputable third parties in order to gather general statistical information about the Website user base, sales patterns, traffic volumes, and related matters but these details will not include information personally identifying you;</li>
                  <li>HM Revenue and Customs, regulators, and other authorities who require reports of processing activities in certain circumstances;</li>
                  <li>marketing organisations to assist with the distribution of our marketing correspondence;</li>
                  <li>Third parties who we may choose to sell, transfer or merge parts of our business or assets. Alternatively, we may seek to acquire other businesses, then the new owners may use your personal data in the same way as set out in this privacy policy;</li>
                  <li>to the police, regulatory bodies, or legal advisers in connection with any alleged criminal offense or suspected breach of the Terms of Service or where we are under a duty to disclose or share Your Data in order to comply with any legal obligation;</li>
                  <li>social media organisations for their own promotion and marketing purposes (this relates to practices and sessions only and such data will only be shared with your prior consent);</li>
                  <li>to software suppliers when you use the comments section with our applications. The software analyses user-generated content to identify any anomalies which may indicate behavior that poses a threat to children. Where such a threat is identified further to analysis of the individual's behavior, we may take action we consider appropriate including but not limited to removing you as a registered user and/or the notification of law enforcement organisations.</li>
                </ul>
              </div>
            </section>

            {/* Cross Border Data Transfers */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Cross Border Data Transfers</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">11.1</h3>
                <p className="text-gray-300">
                  We will ensure that any transfer of your personal data to a location outside the USA is protected by adequate safeguards, such as Standard Contractual Clauses or similar legal mechanisms.
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Data Security</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">12.1</h3>
                <p className="text-gray-300 mb-4">
                  Where we have given you (or where you have chosen) a password which enables you to access certain parts of BESTVERSION1.COM, you are responsible for keeping this password confidential. We ask you not to share a password with anyone.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">12.2</h3>
                <p className="text-gray-300 mb-4">
                  Unfortunately, the transmission of information via the internet and mobile networks is not completely secure. Although we will do our best to protect Your Data, we cannot guarantee the security of Your Data transmitted to BESTVERSION1.COM. Any transmission is at your own risk. Once we have received Your Data, we will use strict procedures and security features to try to prevent unauthorized access.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">12.3</h3>
                <p className="text-gray-300">
                  Information you provide to us is stored on our secure servers. We have implemented appropriate physical, technical, and organizational measures designed to secure your information against accidental loss and unauthorized access, use, alteration, or disclosure. In addition, we limit access to personal data to those employees, agents, contractors, and other third parties that have a legitimate business need for such access.
                </p>
              </div>
            </section>

            {/* Links to Other Websites */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Links to Other Websites</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">13.1</h3>
                <p className="text-gray-300">
                  BESTVERSION1.COM may, from time to time, contain links to and from the websites of third parties. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these. When you leave our Site, we encourage you to read the privacy notice/policy of every website you visit.
                </p>
              </div>
            </section>

            {/* Legal Basis for Processing Your Personal Data */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Legal Basis for Processing Your Personal Data</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">14.1</h3>
                <p className="text-gray-300 mb-4">
                  We will only use your personal data where the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="list-decimal list-inside text-gray-300 mb-4 ml-6 space-y-2">
                  <li>for the performance of a contract we enter into with you;</li>
                  <li>where necessary for compliance with a legal or regulatory obligation we are subject to; and</li>
                  <li>for our legitimate interests (as described within this policy) where your interests and fundamental rights do not override these interests.</li>
                </ul>
              </div>
            </section>

            {/* Access to, Updating, Deleting, and Restricting Use of Your Data */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Access to, Updating, Deleting, and Restricting Use of Your Data</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">15.1</h3>
                <p className="text-gray-300 mb-4">
                  It is important that the personal data we hold about you is accurate and current. Please keep us informed if the personal data we hold about you changes. Where you are a registered user of BESTVERSION1.COM you may update your data contained in your online account at any time.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">15.2</h3>
                <p className="text-gray-300 mb-4">
                  Data protection legislation gives you the right to object to the processing of your personal data in certain circumstances or withdraw your consent to the processing of your personal data where this has been provided. You also have the right to access information held about you and for this to be provided in an intelligible form. If you would like a copy of some or all of your personal data, please send an email to{' '}
                  <a href="mailto:team@bestversion1.com" className="text-blue-400 hover:text-blue-300 underline">
                    team@bestversion1.com
                  </a>
                  . In certain circumstances, we reserve the right to charge a reasonable fee to comply with your request.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">15.3</h3>
                <p className="text-gray-300 mb-4">
                  You can also ask us to undertake the following:
                </p>
                <ul className="list-decimal list-inside text-gray-300 mb-4 ml-6 space-y-2">
                  <li>update or amend Your Data if you feel this is inaccurate;</li>
                  <li>remove Your Data from Our database entirely;</li>
                  <li>send you copies of Your Data in a commonly used format and transfer Your Data to another entity where you have supplied this to us, and we process this electronically with your consent or where necessary for the performance of a contract;</li>
                  <li>restrict the use of Your Data.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">15.4</h3>
                <p className="text-gray-300 mb-4">
                  We may request specific information from you to help us confirm your identity and your right to access/provide you with the personal data we hold about you or make your requested changes. Data protection legislation may allow or require us to refuse to provide you with access to some or all of Your Data/comply with requests made in accordance with your rights referred to above. If we cannot provide you with access to Your Data, or deal with any other request we receive, we will inform you of the reasons why, subject to any legal or regulatory restrictions.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">15.5</h3>
                <p className="text-gray-300">
                  Please send any requests relating to the above to our Data Protection Lead at{' '}
                  <a href="mailto:team@bestversion1.com" className="text-blue-400 hover:text-blue-300 underline">
                    team@bestversion1.com
                  </a>
                  {' '}specifying your name and the action you would like us to undertake. Where you are a registered user please also supply the email address you used to register with us and your username. Note that in relation to requests to access Your Data, we reserve the right in certain circumstances to charge a reasonable fee to carry out your request.
                </p>
              </div>
            </section>

            {/* Right to Withdraw Consent */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Right to Withdraw Consent</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">16.1</h3>
                <p className="text-gray-300">
                  Where you have provided your consent to the collection, processing, and transfer of your personal data, you may withdraw that consent at any time. This will not affect the lawfulness of data processing based on consent before it is withdrawn. To withdraw your consent please contact us at{' '}
                  <a href="mailto:team@bestversion1.com" className="text-blue-400 hover:text-blue-300 underline">
                    team@bestversion1.com
                  </a>
                </p>
              </div>
            </section>

            {/* Changes to Our Privacy Policy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Changes to Our Privacy Policy</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">17.1</h3>
                <p className="text-gray-300">
                  Any changes we may make to this privacy policy in the future will be posted on this page. We encourage you to check this privacy policy from time to time for any updates or changes to the privacy policy. If we would like to use your previously collected personal data for different purposes than those we notified you about at the time of collection, we will provide you with notice and, where required by law, seek your consent before using your personal data for a new or unrelated purpose. We may process your personal data without your knowledge or consent where required by applicable law or regulation.
                </p>
              </div>
            </section>

            {/* Contact Us */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">18.1</h3>
                <p className="text-gray-300">
                  If you have any questions, comments, or requests regarding this policy or how we use Your Data please contact our Data Protection Lead at{' '}
                  <a href="mailto:team@bestversion1.com" className="text-blue-400 hover:text-blue-300 underline">
                    team@bestversion1.com
                  </a>
                  . This is in addition to your right to contact relevant authorities if you are unsatisfied with our response to any issues you raise.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPage; 