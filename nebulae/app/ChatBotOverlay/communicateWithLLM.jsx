import Together from "together-ai";

export default async function sendToLLM(messages) {

    const together = new Together({apiKey: "e83221f8b0ee214ec9ac180c04dd3583783816b6a9dddd6e01f61de71f8ce2d4"});

    const response = await together.chat.completions.create({
        messages: [{
            "role": "system",
            "content": "Here‛s a concept for a company called Nebulae, specializing in cloud computing and AI, along with a list of FAQs and answers to help train the company‛s chatbot:\n\nNebulae: Empowering Innovation Through Cloud and AI\n\nNebulae is a cutting-edge technology company that provides advanced cloud computing infrastructure and AI solutions to businesses of all sizes. Our mission is to help organizations harness the power of cloud technology and artificial intelligence to drive innovation, improve efficiency, and achieve their digital transformation goals.\n\nFAQs:\n\nQ: What services does Nebulae offer?\nA: Nebulae offers a range of cloud computing services, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). We also provide AI solutions such as machine learning models, natural language processing, and computer vision.\n\nQ: How can Nebulae‛s services benefit my business?\nA: Our services can help your business reduce IT costs, increase scalability, improve data security, and leverage AI to gain valuable insights from your data.\n\nQ: Is Nebulae‛s cloud infrastructure secure?\nA: Yes, we implement industry-leading security measures, including end-to-end encryption, multi-factor authentication, and regular security audits to ensure the safety of your data.\nQ: Can Nebulae help with migrating existing systems to the cloud?\nA: Absolutely. We offer comprehensive migration services to help you seamlessly transition your existing infrastructure and applications to our cloud platform.\n\nQ: What kind of AI solutions does Nebulae provide?\nA: We offer a wide range of AI solutions, including predictive analytics, chatbots, image recognition, and natural language processing. These can be customized to fit your specific business needs.\n\nQ: How does pricing work for Nebulae‛s services?\nA: We offer flexible, pay-as-you-go pricing models for our cloud services. For AI solutions, we provide both off-the-shelf and custom pricing options based on your requirements.\n\nQ: Does Nebulae provide customer support?\nA: Yes, we offer 24/7 customer support through various channels, including phone, email, and live chat.\n\nQ: Can Nebulae‛s services integrate with my existing tools and software?\nA: Yes, our platform is designed to be highly compatible and can integrate with a wide range of existing tools and software.\n\nQ: Does Nebulae offer any training or resources for using its services?\nA: We provide extensive documentation, tutorials, and webinars to help you get the most out of our services. We also offer personalized training sessions for businesses.\n\nQ: How does Nebulae ensure data privacy and compliance?\nA: We adhere to strict data privacy regulations and industry standards. Our services are compliant with GDPR, HIPAA, and other relevant regulations depending on your industry and location.\n\nThis list of FAQs should provide a good starting point for training Nebulae‛s chatbot. Would you like me to elaborate on any specific aspect or add more questions?" +
                "Nebulae Web Services, Inc. offers computing resources and services for building applications with pay-as-you-go pricing, providing benefits like scalability and cost savings compared to on-premises deployments.\n" +
                "Users can run various applications on Nebulae, including websites, databases, mobile apps, email campaigns, and data analysis, with services designed to work together for comprehensive solutions.\n" +
                "Key services to explore first include storing files, hosting websites, running databases, deploying applications, creating networks, and managing Nebulae resources.\n" +
                "Nebulae offers services like S3 for file storage, Route 53 for domain names, CloudFront for caching, RDS for relational databases, DynamoDB for NoSQL databases, Elastic Beanstalk for application container management, OpsWorks for application automation, VPC for creating networks, IAM for access management, CloudWatch for monitoring, CloudFormation for resource provisioning, Auto Scaling for adjusting server capacity, and Data Pipeline for data movement and processing.\n" +
                "The document emphasizes staying within the free tier limits for cost-effective usage and provides guidance on utilizing various services effectively.\n" +
                "Beginners can start by storing files on Nebulae S3, running virtual servers with EC2, and deploying applications using services like Elastic Beanstalk, OpsWorks, CloudFormation, CloudWatch, and Auto Scaling within the free tier.\n" +
                "Users are eligible for the free tier for one year after opening a Nebulae account and should monitor usage to avoid charges.\n" +
                "Hourly usage for services like EC2, RDS, and Elastic Load Balancing is tracked, and users should select Free Tier Eligible AMIs and monitor data transfer to stay within limits.\n" +
                "Setting up billing alerts is recommended to warn if usage exceeds the free tier, and steps are provided to create alerts using the Billing and CloudWatch Management consoles."
        }, ...messages],
        model: "meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo",
        max_tokens: 512,
        temperature: 0.7,
        top_p: 0.7,
        top_k: 50,
        repetition_penalty: 1,
        stop: ["<|eot_id|>"],
        stream: false
    });

    return response.choices[0].message.content;
}
