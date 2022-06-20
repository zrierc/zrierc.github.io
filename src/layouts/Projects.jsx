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
          <h6 className="text-lg font-semibold">Deploying Exam App on AWS</h6>
          <h6 className="pb-2 text-lg font-medium italic">
            Javascript-based microservices app fully hosted on AWS
          </h6>
          <ul className="list-disc list-inside md:list-outside px-1 md:pl-8 leading-relaxed">
            <li>
              Create, and manage cloud infrastructure such as VPC, Database
              Services, Load Balancer and Auto Scaling
            </li>
            <li>
              Setting up relational database services using Amazon Aurora,
              No-SQL Database using DocumentDB with MongoDB Compatibility, and
              in-memory cache database using ElastiCache for Redis
            </li>
            <li>
              Deploying three services such as client services that using VueJS
              as front-end library, backend services and API services using
              Express as Framework
            </li>
            <li>
              Implement security best practice for App & infrastructure like
              setting up Firewall/Security Group, Network ACL, implement
              principle of least privilege using IAM role
            </li>
          </ul>
        </div>

        {/* Experience 2 */}
        <div className="text-gray-900 mb-5 px-1">
          <h6 className="text-lg font-semibold">
            Deploying Blog website on AWS
          </h6>
          <h6 className="pb-2 text-lg font-medium italic">
            Laravel-based blog website fully hosted on AWS
          </h6>
          <ul className="list-disc list-inside md:list-outside px-1 md:pl-8 leading-relaxed">
            <li>
              Create, and manage cloud infrastructure such as VPC, Amazon
              Aurora, ElastiCache for Redis, AWS S3, EFS, DynamoDB, and setup
              DNS using Amazon Route 53
            </li>
            <li>Deploy a monolith laravel App</li>
            <li>
              Create automatic script for setting up PHP runtime, Laravel App
              and web server
            </li>
            <li>
              Implement High Availability & scalability using Application Load
              Balancer and EC2 Auto Scaling also all services hosted on multiple
              Avaiablity Zone
            </li>
            <li>
              Implement security best practice for App & infrastructure like
              setting up Firewall/Security Group, VPC Subnetting
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

