import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsPage = () => {
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
            Terms and Conditions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Please read these terms of use carefully before you start to use our Services.
          </p>
        </div>

        {/* Terms Content */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-800">
          <div className="prose prose-invert prose-lg max-w-none">
            
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Introduction</h2>
              <p className="text-gray-300 mb-4">
                Please read these terms of use carefully before you start to use the Services. By accessing or using Our Services, you indicate that you accept these terms of use and that you agree to be bound by them. Your access to and use of these Services are conditioned upon your acceptance of and compliance with these Terms, our Privacy Policy, and any other such terms as may be in place from time to time.
              </p>
              <p className="text-gray-300 mb-4">
                These Terms are an agreement between you and Best Version 1 LLC, its affiliates, and subsidiaries ("Best Version 1", "we", "our" or "us").
              </p>
              <p className="text-gray-300 mb-4">
                This page (together with the documents referred to on it) tells you the terms of use which govern your access to and use of the website www.bestversion1.com, its subdomains, associated app or apps ("App" or "Apps"); Internet properties owned or operated by Best Version 1 LLC (the "Services", "Site' or "Sites") and any information, graphics, text, photos, videos, or other materials uploaded to or downloaded from the Site and Apps (collectively the "Content"). We refer to the Site, the App, and related Services throughout this policy as the "Services".
              </p>
              <p className="text-gray-300">
                If you do not agree to these terms of use, please refrain from using our Services immediately.
              </p>
            </section>

            {/* Accessing Our Services */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Accessing Our Services</h2>
              <p className="text-gray-300 mb-4">
                Access to our Services is permitted on a temporary basis, and we reserve the right to withdraw or amend any aspect of our Services without notice. We will not be liable if for any reason our Services are unavailable at any time or for any period.
              </p>
              <p className="text-gray-300 mb-4">
                From time to time, we may restrict access to some parts of our Services, or our entire Services, to users who have registered with us.
              </p>
              <p className="text-gray-300 mb-4">
                If you provide personal information to us, by electronically agreeing to our Privacy Policy; and/or our Terms; and/or by using any aspect of our Services including websites or apps, you are confirming in writing that you:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 ml-6">
                <li>have provided true, accurate, and complete information about yourself;</li>
                <li>will promptly maintain and update such personal information to keep it true, accurate, current, and complete;</li>
                <li>consent to us contacting you by email, SMS, and telephone on the details you have provided to us.</li>
              </ul>
              <p className="text-gray-300 mb-4">
                If we have reasonable grounds to suspect that the personal information you have provided to us is untrue, inaccurate, or incomplete, we shall have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
              </p>
            </section>

            {/* Prohibited Activities */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Prohibited Activities</h2>
              <p className="text-gray-300 mb-4">
                You may not use any "deep-link", "page-scrape", "robot", "spider" or other automatic device, program, algorithm, or methodology, or any similar or equivalent manual process, to access, acquire, copy, or monitor any portion of the Services or any Content, or in any way reproduce or circumvent the navigational structure or presentation of the Services or any Content, to obtain or attempt to obtain any materials, documents, or information through any means not purposely made available through the Services.
              </p>
              <p className="text-gray-300 mb-4">
                You may not attempt to gain unauthorized access to any portion or feature of the Services, or any other systems or networks connected to the Services or to any of the Services offered on or through the Services by hacking, password "mining" or any other illegitimate means.
              </p>
              <p className="text-gray-300 mb-4">
                You may not probe, scan, or test the vulnerability of the Services or any network connected to the Site, nor breach the security or authentication measures of the Services or any network connected to the Services.
              </p>
            </section>

            {/* Text Messages/SMS and Email */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Text Messages/SMS and Email</h2>
              <p className="text-gray-300 mb-4">
                As per the Privacy Policy, you have agreed to us utilizing your email details for agreed purposes. We will not sell your information.
              </p>
              <p className="text-gray-300 mb-4">
                Our Electronic Agreement to Receive Text Messages; E-Sign Disclosure: When you agree to receive text messages, you also consent to the use of an electronic record to document your agreement. To stop receiving text messages from us or the operator of our text message program, simply text STOP to the short code provided in the text messages that you no longer wish to receive.
              </p>
              <p className="text-gray-300 mb-4">
                Who Can Receive Text Messages? By signing up to receive texts, you represent that you are 13 years of age or older and agree to the terms set forth in these Terms of Use, which form a binding agreement between you and us.
              </p>
              <p className="text-gray-300 mb-4">
                Cancellation of Text Messages. To stop receiving text messages from us or a specific operator text message program, simply text STOP to the short code provided in the text messages that you no longer wish to receive.
              </p>
            </section>

            {/* Intellectual Property Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Intellectual Property Rights</h2>
              <p className="text-gray-300 mb-4">
                We are the owner or the licensee of all intellectual property rights in our Services, and in the material published on it. Those works are protected by copyright laws and treaties around the world. All such rights are reserved.
              </p>
              <p className="text-gray-300 mb-4">
                You may print off one copy, and may download extracts, of any page(s) from our website for your personal reference and you may draw the attention of others within your organization to material posted on our Services.
              </p>
              <p className="text-gray-300 mb-4">
                You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences, or any graphics separately from any accompanying text.
              </p>
              <p className="text-gray-300 mb-4">
                You must not use any part of the materials on our Services for commercial purposes without obtaining a license to do so from us or our licensors.
              </p>
            </section>

            {/* Content Usage */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Content Usage</h2>
              <p className="text-gray-300 mb-4">
                In terms of Content, whether paid for or otherwise, your obligations are as follows:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 ml-6">
                <li>Not to copy the Content except where such copying is incidental to normal use of the Content, or where it is necessary for the purpose of back-up or operational security;</li>
                <li>Not to rent, lease, sub-license, loan, translate, merge, adapt, vary, or modify the Content or Documentation;</li>
                <li>Not to make alterations to, or modifications of, the whole or any part of the Content, nor permit the Content or any part of it to be combined with, or become incorporated in, any other programs;</li>
                <li>Not to disassemble, decompile, reverse engineer, or create derivative works based on the whole or any part of the Content;</li>
                <li>To keep all copies of the Content secure and to maintain accurate and up-to-date records of the number and locations of all copies of the Content;</li>
                <li>To include the copyright notice of us on all entire and partial copies you make of the Content on any medium;</li>
                <li>Not to provide or otherwise make available the Content in whole or in part to any person without our prior written consent.</li>
              </ul>
            </section>

            {/* Reliance on Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Reliance on Information Posted</h2>
              <p className="text-gray-300 mb-4">
                Commentary and other materials posted on our Services are not intended to amount to advice on which reliance should be placed. We therefore disclaim all liability and responsibility arising from any reliance placed on such materials by any visitor to or user of our Service, or by anyone who may be informed of any of its contents.
              </p>
            </section>

            {/* Services Changes */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Our Services Change Regularly</h2>
              <p className="text-gray-300 mb-4">
                We aim to update our Services regularly and may change the Content at any time. If the need arises, we may suspend access to our Services, or close them indefinitely. Any of the material on our Services may be out of date at any given time, and we are under no obligation to update such material.
              </p>
            </section>

            {/* Liability */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Our Liability</h2>
              <p className="text-gray-300 mb-4">
                You acknowledge and agree that the use of the Services is at your sole risk. You acknowledge that we assume no liability or responsibility for any damage to you, your computer, or your other property due to your access to or use of the services or any materials provided on the Services.
              </p>
              <p className="text-gray-300 mb-4">
                While we use reasonable efforts to include accurate and up-to-date information in providing our Services, we make no warranties or representations as to its accuracy. The information contained in or made available through the Services cannot replace or substitute the services of trained professionals in any field.
              </p>
              <p className="text-gray-300 mb-4">
                The Services are provided "as is" and without warranties of any kind either express or implied. To the fullest extent permissible pursuant to applicable law, we disclaim all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose.
              </p>
            </section>

            {/* Payment Terms */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Paying to Use Our Services</h2>
              <p className="text-gray-300 mb-4">
                A paid license for particular content or services will be agreed upon at the point at which you subscribe, re-subscribe, update, or otherwise agree to access certain specific aspects of our Services. All access to our Services remains subject to these Terms, and your payment obligations are incorporated into these Terms.
              </p>
              <p className="text-gray-300 mb-4">
                By paying for access to our Services you warrant that:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 ml-6">
                <li>You are legally capable of entering into binding contracts;</li>
                <li>You are at least 16 years old or have parental consent;</li>
                <li>You are resident in a country in which use of our site and/or the Content and Documentation will not be deemed unlawful or in breach of any law or regulation applicable to that country;</li>
                <li>You are accessing our site from the country of your residence.</li>
              </ul>
            </section>

            {/* Refunds Policy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Our Refunds Policy</h2>
              <ul className="list-disc list-inside text-gray-300 mb-4 ml-6">
                <li>All refunds for non-canceled subscriptions are provided at our discretion.</li>
                <li>It is the user's responsibility to manage their subscription.</li>
                <li>If you cancel your subscription within thirty days of signing up and have not used any of our services, we will process a refund to you as soon as possible and on a pro-rata basis.</li>
                <li>All refunds will be processed within 30 days of your refund request.</li>
                <li>All refunds are subject to a transaction handling fee of 15% of the value of the refund.</li>
              </ul>
            </section>

            {/* License Grant */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Grant and Scope</h2>
              <p className="text-gray-300 mb-4">
                In consideration of payment by you of the license fee and you agreeing to abide by this License, we grant you a non-exclusive, non-transferable license to use the Content on the terms and conditions herein.
              </p>
              <p className="text-gray-300 mb-4">You may:</p>
              <ul className="list-disc list-inside text-gray-300 mb-4 ml-6">
                <li>Access the Content for your private purposes only;</li>
                <li>Transfer the Content from one computer to another provided it is used on only one computer at any one time;</li>
                <li>Use and copy any associated documentation in support of the use permitted under our Acceptable Usage Policy and the terms herein.</li>
              </ul>
            </section>

            {/* Indemnification */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Indemnification</h2>
              <p className="text-gray-300 mb-4">
                You hereby agree to indemnify and hold us, and our affiliates, and each of our respective general and limited partners, members, shareholders, directors, officers, employees, agents, representatives, vendors, and business partners, harmless from all claims, liabilities, damages, and expenses (including lawyers' fees and court costs) arising out of or relating to your use of the Services and any breach or alleged breach of these Terms and associated terms.
              </p>
            </section>

            {/* Class Action Waiver */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Class Action Waiver</h2>
              <p className="text-gray-300 mb-4 font-semibold">
                PLEASE READ THIS SECTION CAREFULLY - IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS.
              </p>
              <p className="text-gray-300 mb-4">
                We mutually agree that we will resolve any disputes, claims, or controversies on an individual basis, and that any claims brought under these Terms in connection with the Services will be brought in an individual capacity, and not on behalf of, or as part of, any purported class, consolidated, or representative proceeding.
              </p>
              <p className="text-gray-300 mb-4">
                We further agree that you shall not participate in any consolidated, class, or representative proceeding (existing or future) brought by any third party arising under these Terms or in connection with the Services.
              </p>
            </section>

            {/* Uploading Material */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Uploading Material to Our Services</h2>
              <p className="text-gray-300 mb-4">
                Whenever you make use of a feature that allows you to upload material to our Services, or to make contact with other users of our Services, you must comply with the content standards set out in our acceptable use policy. You warrant that any such contribution does comply with those standards, and you indemnify us for any breach of that warranty.
              </p>
              <p className="text-gray-300 mb-4">
                Any material you upload to our Services will be considered non-confidential and non-proprietary, and we have the right to use, copy, distribute, and disclose to third parties any such material for any purpose.
              </p>
            </section>

            {/* Linking */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Linking to Our Services</h2>
              <p className="text-gray-300 mb-4">
                You may link to our Services, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval, or endorsement on our part where none exists.
              </p>
              <p className="text-gray-300 mb-4">
                You must not establish a link from any website that is not owned by you. Our Services must not be framed on any other site, nor may you create a link to any part of our Services other than the home page.
              </p>
            </section>

            {/* Jurisdiction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Jurisdiction and Applicable Law</h2>
              <p className="text-gray-300 mb-4">
                The courts in Miami, Florida, will have exclusive jurisdiction over any claim arising from, or related to, a visit to our Services although we retain the right to bring proceedings against you for breach of these conditions in your country of residence or any other relevant country.
              </p>
              <p className="text-gray-300 mb-4">
                These terms of use and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the law of the United States.
              </p>
            </section>

            {/* Variations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Variations</h2>
              <p className="text-gray-300 mb-4">
                We may revise these terms of use at any time by amending this page. You are expected to check this page from time to time to take notice of any changes we made, as they are binding on you. Some of the provisions contained in these terms of use may also be superseded by provisions or notices published elsewhere on our Services.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Your Concerns</h2>
              <p className="text-gray-300 mb-4">
                If you have any concerns about material which appears on our site, please contact us at{' '}
                <a href="mailto:team@bestversion1.com" className="text-blue-400 hover:text-blue-300 underline">
                  team@bestversion1.com
                </a>
              </p>
            </section>

            {/* Transfer of Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Transfer of Rights and Obligations</h2>
              <p className="text-gray-300 mb-4">
                These terms are binding on you and us and on our respective successors and assigns. You may not transfer, assign, charge, or otherwise dispose of your rights or obligations arising under these terms, without our prior written consent.
              </p>
              <p className="text-gray-300 mb-4">
                We may transfer, assign, charge, subcontract, or otherwise dispose of any of our rights or obligations arising under these Terms at any time.
              </p>
            </section>

            {/* Entire Agreement */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Entire Agreement</h2>
              <p className="text-gray-300 mb-4">
                These Terms and any document expressly referred to in them represent the entire agreement between us in relation to the subject matter of these Terms and supersede any prior agreement, understanding, or arrangement between us, whether oral or in writing unless we have separately negotiated and acknowledged in writing that these terms are varied or omitted.
              </p>
            </section>

            {/* Law and Jurisdiction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Law and Jurisdiction</h2>
              <p className="text-gray-300 mb-4">
                Any dispute or claim arising out of or in connection with these terms (including non-contractual disputes or claims) will be governed by the laws of the United States and subject to the exclusive jurisdiction of the courts in Miami, Florida unless we concede to the matter being dealt with under such alternative regime as we may reasonably consider to be appropriate in the circumstances if outside of the United States.
              </p>
              <p className="text-gray-300">
                At all times we shall have the right to decide the matter by binding arbitration or such other means of Alternative Dispute Resolution as we reasonably consider to be appropriate in the circumstances.
              </p>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPage; 