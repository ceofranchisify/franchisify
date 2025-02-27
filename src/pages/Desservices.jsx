import React from "react";
import { motion } from "framer-motion";
import { FaBusinessTime, FaBalanceScale, FaBullhorn, FaUsers } from "react-icons/fa";

const FranchiseServices = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Franchise Model Development Section */}
        <section id="franchise-model-development" className="bg-blue-600 text-white py-16 px-6">
          <div className="text-center">
            <FaBusinessTime className="text-white text-6xl mx-auto mb-6" />
            <h2 className="text-4xl font-extrabold mb-4">Franchise Model Development</h2>
            <p className="text-lg leading-relaxed">
              Franchise Model Development is a strategic process that enables businesses to expand 
              efficiently while maintaining consistency and brand integrity. By creating a structured 
              franchise model, businesses can scale their operations with minimal risk and maximum 
              profitability. This model involves designing standardized processes, operational guidelines, 
              and legal frameworks to ensure smooth replication of the business in multiple locations.  
              <br /><br />
              A well-structured franchise model includes elements such as brand identity, training programs, 
              supply chain management, and marketing strategies. It also defines financial aspects like franchise fees, 
              royalties, and revenue-sharing models. Developing a successful franchise model requires extensive 
              market research, competitive analysis, and legal compliance.  
              <br /><br />
              By implementing a robust franchise model, businesses can achieve exponential growth, increase 
              brand recognition, and create multiple revenue streams. Whether it’s a fast-food chain, retail 
              store, or service-based business, franchise development is a proven path to scalable success.
            </p>
          </div>
        </section>

        {/* Legal Support Section */}
        <section id="legal-support" className="bg-white text-black py-16 px-6">
          <div className="text-center">
            <FaBalanceScale className="text-blue-600 text-6xl mx-auto mb-6" />
            <h2 className="text-4xl font-extrabold mb-4">Legal Support</h2>
            <p className="text-lg leading-relaxed">
              Ensuring legal compliance is a critical aspect of any successful franchise. Our dedicated legal 
              support team provides expert guidance on franchise agreements, intellectual property protection, 
              regulatory compliance, and dispute resolution. We help businesses navigate complex legal landscapes 
              by drafting contracts that safeguard both franchisors and franchisees while ensuring adherence to 
              local and international laws.  
              <br /><br />
              Franchise agreements serve as the foundation for a smooth business relationship. We ensure these 
              documents are comprehensive, covering essential elements like brand usage, operational guidelines, 
              royalty structures, and exit strategies. Additionally, our team assists with registering trademarks 
              and protecting brand identity, preventing unauthorized usage that could harm your business reputation.  
              <br /><br />
              Compliance with franchise laws and industry regulations is crucial for long-term success. Our legal 
              experts stay updated with evolving laws, helping you maintain compliance with labor laws, financial 
              disclosure requirements, and operational licensing. In the event of disputes, we provide mediation 
              and legal strategies to resolve conflicts efficiently, minimizing financial and reputational risks.  
              <br /><br />
              With our legal support services, franchisors can focus on business expansion with peace of mind, 
              knowing that every aspect of their franchise operations is legally sound.
            </p>
          </div>
        </section>

        {/* Lead Generation Section */}
        <section id="lead-generation" className="bg-blue-600 text-white py-16 px-6">
          <div className="text-center">
            <FaBullhorn className="text-white text-6xl mx-auto mb-6" />
            <h2 className="text-4xl font-extrabold mb-4">Lead Generation</h2>
            <p className="text-lg leading-relaxed">
              Lead generation plays a crucial role in the success of any franchise business. Our team specializes 
              in implementing targeted marketing strategies that attract and convert potential franchisees.  
              <br /><br />
              We leverage data-driven techniques, including digital marketing, social media campaigns, and 
              search engine optimization (SEO), to increase visibility and engagement. Our customized approach 
              ensures that only the most suitable and qualified candidates are introduced to your franchise 
              opportunity. By using analytics and performance tracking, we continuously refine our strategies 
              to enhance conversion rates.  
              <br /><br />
              Additionally, our lead generation process includes email marketing, paid advertising, and 
              referral programs, ensuring a steady pipeline of interested investors. Our team works closely 
              with franchise owners to create compelling brand messages that highlight the value and 
              potential of the franchise model.  
              <br /><br />
              By focusing on high-quality leads rather than quantity, we help franchisors build strong, 
              lasting relationships with prospective partners. Our expertise in lead generation empowers 
              businesses to scale efficiently while maintaining brand integrity and operational excellence.
            </p>
          </div>
        </section>

        {/* Franchise Selling Section */}
        <section id="franchise-selling" className="bg-white text-black py-16 px-6">
          <div className="text-center">
            <FaUsers className="text-blue-600 text-6xl mx-auto mb-6" />
            <h2 className="text-4xl font-extrabold mb-4">Franchise Selling</h2>
            <p className="text-lg leading-relaxed">
              Selling a franchise involves more than just finding buyers; it requires a strategic approach 
              to ensure sustainable growth and long-term success. Our franchise selling services help businesses 
              connect with the right partners who align with their vision and operational goals.  
              <br /><br />
              We start by conducting in-depth market research to identify potential franchisees with 
              the financial capability, industry experience, and commitment needed for success. Our team 
              then assists with creating compelling sales presentations, brochures, and franchise 
              opportunity listings to attract serious investors.  
              <br /><br />
              Our franchise selling strategy includes targeted outreach, networking, and personalized 
              consultations to match franchisors with highly motivated buyers. We also facilitate negotiations, 
              ensuring transparent and fair deals that benefit both parties.  
              <br /><br />
              With our expertise, businesses can streamline the franchise sales process, avoiding common 
              pitfalls and ensuring smooth transitions. Our goal is to help franchisors expand their brand 
              efficiently while maintaining quality and operational excellence in every new franchise location.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FranchiseServices;