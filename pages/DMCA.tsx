import React from 'react';
import SEO from '../components/SEO';
import { Shield, AlertTriangle, Mail, FileText } from 'lucide-react';

const DMCA: React.FC = () => {
  return (
    <div className="min-h-screen bg-miraj-black pt-24 pb-20">
      <SEO title="DMCA Policy - UwatchFree Stream" description="Digital Millennium Copyright Act (DMCA) Policy and Takedown Procedures." />
      
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">DMCA <span className="text-miraj-red">Policy</span></h1>
            <p className="text-gray-400 text-lg">Digital Millennium Copyright Act Notice</p>
        </div>

        <div className="bg-miraj-gray border border-white/5 rounded-2xl p-6 md:p-10 shadow-2xl">
            
            <div className="flex items-start gap-4 mb-8 bg-black/40 p-6 rounded-xl border border-miraj-red/20">
                <AlertTriangle className="text-miraj-red flex-shrink-0 mt-1" size={32} />
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">Copyright Infringement Notification</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        UwatchFree Stream respects the intellectual property rights of others and expects its users to do the same. 
                        In accordance with the Digital Millennium Copyright Act of 1998, the text of which may be found on the U.S. Copyright Office website at 
                        <a href="http://www.copyright.gov/legislation/dmca.pdf" target="_blank" rel="noreferrer" className="text-miraj-gold hover:underline ml-1">
                            http://www.copyright.gov/legislation/dmca.pdf
                        </a>, 
                        we will respond expeditiously to claims of copyright infringement committed using the UwatchFree Stream service and/or the UwatchFree Stream website if such claims are reported to our Designated Copyright Agent identified below.
                    </p>
                </div>
            </div>

            <div className="space-y-8 text-gray-300 leading-relaxed">
                <section>
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Shield className="text-miraj-gold" size={20} /> 1. Disclaimer
                    </h2>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                         <p className="font-medium text-white">
                            We DO NOT host nor transmit any audiovisual content itself and DO NOT control nor influence such content. 
                            We cannot accept any liability for the content transmitted by others. Any responsibility for this content lies with those who host or transmit it. 
                            We are not affiliated nor claim to be affiliated with any of the owners of streams and/or videos. All content is copyright of their respective owners.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <FileText className="text-miraj-gold" size={20} /> 2. Takedown Notice
                    </h2>
                    <p className="mb-4">
                        If you are a copyright owner, authorized to act on behalf of one, or authorized to act under any exclusive right under copyright, please report alleged copyright infringements taking place on or through the Site by completing the following DMCA Notice of Alleged Infringement and delivering it to our Designated Copyright Agent.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-gray-400">
                        <li>Identify the copyrighted work that you claim has been infringed.</li>
                        <li>Identify the material or link you claim is infringing (or the subject of infringing activity) and that access to which is to be disabled, including at a minimum, the URL of the link shown on the Site.</li>
                        <li>Provide your mailing address, telephone number, and, if available, email address.</li>
                        <li>Include both of the following statements in the body of the Notice:
                            <ul className="list-circle pl-6 mt-2 italic">
                                <li>"I hereby state that I have a good faith belief that the disputed use of the copyrighted material is not authorized by the copyright owner, its agent, or the law (e.g., as a fair use)."</li>
                                <li>"I hereby state that the information in this Notice is accurate and, under penalty of perjury, that I am the owner, or authorized to act on behalf of the owner, of the copyright or of an exclusive right under the copyright that is allegedly infringed."</li>
                            </ul>
                        </li>
                        <li>Provide your full legal name and your electronic or physical signature.</li>
                    </ul>
                </section>

                <section className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Mail className="text-miraj-gold" size={20} /> 3. Contact Information
                    </h2>
                    <p className="mb-4">
                        Deliver this Notice, with all items completed, to UwatchFree Stream's Designated Copyright Agent:
                    </p>
                    <div className="space-y-2 text-sm">
                        <p><span className="text-gray-500 font-bold uppercase tracking-wider w-24 inline-block">Email:</span> <a href="mailto:dmca@UwatchFree Stream.com" className="text-miraj-red hover:text-white font-bold text-lg">dmca@UwatchFree Stream.com</a></p>
                        <p><span className="text-gray-500 font-bold uppercase tracking-wider w-24 inline-block">Subject:</span> DMCA Takedown Request</p>
                    </div>
                    <p className="mt-4 text-xs text-gray-500 italic">
                        Please note that we may share the identity and information in any copyright infringement claim we receive with the alleged infringer. In submitting a claim, you understand accept and agree that your identity and claim may be communicated to the alleged infringer.
                    </p>
                </section>
            </div>

        </div>
      </div>
    </div>
  );
};

export default DMCA;