
import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import PageHeader from '../../components/shared/PageHeader';
import SectionHeader from '../../components/shared/SectionHeader';
import Button from '../../components/shared/Button';
import { Link } from 'react-router-dom';

const NewAshramProjectPage = () => {
  return (
    <PageLayout title="New Ashram Project">
      <PageHeader 
        title="New Ashram Project" 
        subtitle="Help us build a new spiritual home for our community"
        backgroundImage="https://images.unsplash.com/photo-1566264956194-e49942084030?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="lead text-xl text-gray-700">
              The Ramakrishna Centre of South Africa, Johannesburg, is embarking on an important journey to build a new ashram to better serve our growing community and expand our spiritual, educational, and humanitarian services.
            </p>
            
            <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/new-ashram-project/vision" className="block">
                <div className="h-full p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                  <h3 className="text-xl font-heading font-semibold mb-3">Project Vision</h3>
                  <p className="text-gray-600">Learn about our vision for the new ashram and why it's necessary</p>
                </div>
              </Link>
              
              <Link to="/new-ashram-project/timeline" className="block">
                <div className="h-full p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                  <h3 className="text-xl font-heading font-semibold mb-3">Timeline & Progress</h3>
                  <p className="text-gray-600">Follow our progress and see what we've accomplished so far</p>
                </div>
              </Link>
              
              <Link to="/new-ashram-project/fundraising" className="block">
                <div className="h-full p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                  <h3 className="text-xl font-heading font-semibold mb-3">Fundraising</h3>
                  <p className="text-gray-600">Learn how you can contribute to this important initiative</p>
                </div>
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg my-8 text-center">
              <h3 className="text-2xl font-heading font-semibold mb-4">Support Our Vision</h3>
              <p className="mb-6">
                We invite you to be part of this sacred journey. Your support, no matter how big or small, will help us create a space where spiritual seekers can find peace, guidance, and community for generations to come.
              </p>
              <Button href="/new-ashram-project/fundraising" size="lg">
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NewAshramProjectPage;
