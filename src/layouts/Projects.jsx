// import Card from '../components/Card';

const Projects = () => {
  return (
    <section
      id="projcts"
      className="py-8 md:py-14 border-b mx-auto flex justify-center items-center flex-col"
    >
      <h2 className="mb-3 text-3xl md:text-4xl font-medium text-gray-900 text-center">
        Recent Projects / Experiences
      </h2>
      <h4 className="mb-10 text-lg font-medium text-gray-700">What do I do</h4>

      <div className="max-w-screen-lg text-gray-900 flex flex-col">
        {/* Experience 1 */}
        <div className="text-gray-900 mb-5 px-1">
          <h6 className="text-lg font-semibold">
            Build, Automate, and Provision Cloud Infrastructure on AWS{" "}
          </h6>
          <h6 className="pb-2 text-lg font-medium italic">
            Cloud Infrastructure Engineer
          </h6>
          <ul className="list-disc list-inside md:list-outside px-1 md:pl-8 leading-relaxed">
            <li>
              Experienced in the end-to-end management of AWS cloud
              environments. Responsible for monitoring system health, managing
              security policies, performing routine maintenance, and ensuring
              high availability and reliability of core services like EC2, S3,
              RDS, and IAM.
            </li>
            <li>
              Provisioning and managing scalable, secure, and resilient cloud
              infrastructure and network architectures on AWS. Leveraged
              Infrastructure as Code (IaC) principles using the AWS Cloud
              Development Kit (CDK)
            </li>
            <li>
              Help to implemented, and maintained robust, automated CI/CD
              pipelines for diverse web applications
            </li>
          </ul>
        </div>

        {/* Experience 2 */}
        <div className="text-gray-900 mb-5 px-1">
          <h6 className="text-lg font-semibold">
            Introducing Cloud Computing to vocational school students
          </h6>
          <h6 className="pb-2 text-lg font-medium italic">
            Mentor / Bootcamp instructor
          </h6>
          <ul className="list-disc list-inside md:list-outside px-1 md:pl-8 leading-relaxed">
            <li>
              Provided personalized one-on-one mentoring and conducted focused,
              hands-on workshops on modern cloud architectures. Specialized in
              Serverless computing, guiding participants through building,
              deploying, and optimizing applications using AWS Lambda.
            </li>
            <li>
              Led intensive, week-long to month-long cloud computing bootcamps
              for vocational school students.
            </li>
            <li>
              Developed and delivered a hands-on curriculum covering
              foundational and intermediate topics, including Core Cloud
              Concepts with AWS, Infrastructure as Code (IaC) using Terraform,
              Containerization with Docker, CI/CD Automation using GitHub
              Actions, and many more.
            </li>
          </ul>
        </div>

        {/* <Card
          img={
            'https://images.unsplash.com/photo-1654509123531-ab2e692f1095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          }
        />
        <Card />  */}
      </div>
    </section>
  );
};

export default Projects;
