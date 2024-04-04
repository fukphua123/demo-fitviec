// Components
import Container from "@/components/layout/container";
import EmployerCard from "@/components/employer-card";
import JobCard from "../job-card";
import JobCardDemo from "../job-card-demo";
import { EMPLOYERS } from "@/lib/constants";
import { JOBS } from "@/lib/constants";
import axios from "axios";
import { useState, useEffect } from "react";
const JOBSLIST = () => {
    const [JOBDEMO, setJOBDEMO] = useState([]);
    useEffect(() => {
        fetch('https://demo-restful-api-itviec.vercel.app/api/jobs')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setJOBDEMO(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
};
const TopSearchSection = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://demo-restful-api-itviec.vercel.app/api/jobs')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    const handleClick = () => {
        e.preventDefault();
        console.log('You clicked submit.');
    }
    return (
        <Container className="py-16 pt-6">
            <div class="flex flex-col flex-row">
                <h1 class="font-bold text-2xl text-black px-4" data-jobs-filter-target="header">
                    {posts.length} IT jobs in Vietnam
                </h1>



                <div className="grid md:grid-cols-12">
                    <div className="md:col-span-5">
                        {posts.map((job, index) => (
                            <JobCardDemo key={index} job={job} onClick={handleClick} />
                        ))}
                    </div>
                    <div className="md:col-span-7 bg-white">
                        <div class="preview-job-header py-6 px-6 pb-2">
                            <div class="flex items-center gap-3">
                                <a href="/companies/brickmate-group-vietnam" target="_blank" class="bg-white logo-employer-preview">
                                </a>
                                <div class="flex flex-col gap-2 font-semibold">
                                    <h2 class="text-it-black">Web Developer (Senior - Open to Fullstack)</h2>
                                    <a href="/companies/brickmate-group-vietnam" target="_blank" class="text-rich-grey">BRICKMATE GROUP VIETNAM</a>
                                    <div class="flex items-center text-rich-grey">
                                        <svg fill="none" class="w-6 h-6 stroke-current text-gray-500 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V18"></path>
                                            <path d="M14.9287 7.90332H10.5395C9.99625 7.90332 9.47527 8.11912 9.09114 8.50325C8.70701 8.88738 8.49121 9.40836 8.49121 9.9516C8.49121 10.4948 8.70701 11.0158 9.09114 11.4C9.47527 11.7841 9.99625 11.9999 10.5395 11.9999H13.4656C14.0088 11.9999 14.5298 12.2157 14.914 12.5998C15.2981 12.9839 15.5139 13.5049 15.5139 14.0482C15.5139 14.5914 15.2981 15.1124 14.914 15.4965C14.5298 15.8806 14.0088 16.0964 13.4656 16.0964H8.49121" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                            <circle cx="12.0002" cy="12.0002" r="9.3" stroke-width="2" stroke="currentColor"></circle>
                                        </svg>
                                        <a href="/sign_in?job=web-developer-senior-open-to-fullstack-brickmate-group-vietnam-4756&amp;job_index=3&amp;view_salary_source=search_page" class="text-decoration-underline">Sign in to view salary</a>
                                    </div>
                                </div>
                            </div>
                            <div class="my-4">
                                <div class="flex items-center">
                                    <a href="/sign_in?applying=true&amp;job=web-developer-senior-open-to-fullstack-brickmate-group-vietnam-4756&amp;lab_feature=preview_job" class="inline-block w-full py-2 px-4 bg-blue-500 rounded-md text-white text-center font-semibold" rel="nofollow" data-controller="utm-tracking">Apply now</a>
                                    <a href="/sign_in" class="border-0 bg-transparent flex items-center p-0 ms-3">
                                        <div class="heart-icon">
                                            <svg class="feather-icon w-8 h-8 text-it-red">
                                                <use xlink:href="https://itviec.com/assets/feather-icons-sprite-520cd3770a1002f7c87bd1ba253464228ad112abb4c34d81c8cda9f937487a49.svg#heart"></use>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <section class="preview-job-overview">
                            <div class="grid gap-2">
                                <div class="flex items-center">
                                    <svg fill="none" viewBox="0 0 24 25" class="w-4 h-4">
                                        <g clip-path="url(#clip0_947_6633)">
                                            <path d="M19 14.625C19 13.6967 18.6312 12.8065 17.9749 12.1501C17.3185 11.4937 16.4283 11.125 15.5 11.125H8.5C7.57174 11.125 6.6815 11.4937 6.02513 12.1501C5.36875 12.8065 5 13.6967 5 14.625" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                            <path d="M12 8.5C13.933 8.5 15.5 6.933 15.5 5C15.5 3.067 13.933 1.5 12 1.5C10.067 1.5 8.5 3.067 8.5 5C8.5 6.933 10.067 8.5 12 8.5Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                            <path d="M11.5 18.9375H12.5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                            <path d="M4.56116 22.7812L2.90039 15.0938H21.0996L19.3696 22.7812" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                            <line stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" x1="1" x2="23" y1="23.5" y2="23.5"></line>
                                        </g>
                                    </svg>
                                    <span class="text-dark-grey text-sm ml-2">19 Cao Thang, Ward 02, District 3, Ho Chi Minh</span>

                                </div>
                                <div class="flex items-center">
                                    <svg fill="none" viewBox="0 0 24 25" class="w-4 h-4">
                                        <g clip-path="url(#clip0_947_6633)">
                                            <path d="M19 14.625C19 13.6967 18.6312 12.8065 17.9749 12.1501C17.3185 11.4937 16.4283 11.125 15.5 11.125H8.5C7.57174 11.125 6.6815 11.4937 6.02513 12.1501C5.36875 12.8065 5 13.6967 5 14.625" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                            <path d="M12 8.5C13.933 8.5 15.5 6.933 15.5 5C15.5 3.067 13.933 1.5 12 1.5C10.067 1.5 8.5 3.067 8.5 5C8.5 6.933 10.067 8.5 12 8.5Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                            <path d="M11.5 18.9375H12.5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                            <path d="M4.56116 22.7812L2.90039 15.0938H21.0996L19.3696 22.7812" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                            <line stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" x1="1" x2="23" y1="23.5" y2="23.5"></line>
                                        </g>
                                    </svg>
                                    <span class="text-dark-grey text-sm ml-2">29A Nguyen Dinh Chieu, Dakao, District 1, Ho Chi Minh</span>

                                </div>
                                <div class="flex items-center">
                                    <svg fill="none" viewBox="0 0 24 25" class="w-4 h-4">
                                        <g clip-path="url(#clip0_947_6633)">
                                            <path d="M19 14.625C19 13.6967 18.6312 12.8065 17.9749 12.1501C17.3185 11.4937 16.4283 11.125 15.5 11.125H8.5C7.57174 11.125 6.6815 11.4937 6.02513 12.1501C5.36875 12.8065 5 13.6967 5 14.625" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                            <path d="M12 8.5C13.933 8.5 15.5 6.933 15.5 5C15.5 3.067 13.933 1.5 12 1.5C10.067 1.5 8.5 3.067 8.5 5C8.5 6.933 10.067 8.5 12 8.5Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                            <path d="M11.5 18.9375H12.5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                            <path d="M4.56116 22.7812L2.90039 15.0938H21.0996L19.3696 22.7812" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                            <line stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" x1="1" x2="23" y1="23.5" y2="23.5"></line>
                                        </g>
                                    </svg>
                                    <span class="text-dark-grey text-sm ml-2">At office</span>
                                </div>
                                <div class="flex items-center gap-3 text-dark-grey">
                                    <svg fill="none" viewBox="0 0 24 25" class="w-4 h-4">
                                        <g clip-path="url(#clip0_947_6633)">
                                            <path d="M19 14.625C19 13.6967 18.6312 12.8065 17.9749 12.1501C17.3185 11.4937 16.4283 11.125 15.5 11.125H8.5C7.57174 11.125 6.6815 11.4937 6.02513 12.1501C5.36875 12.8065 5 13.6967 5 14.625" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                            <path d="M12 8.5C13.933 8.5 15.5 6.933 15.5 5C15.5 3.067 13.933 1.5 12 1.5C10.067 1.5 8.5 3.067 8.5 5C8.5 6.933 10.067 8.5 12 8.5Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                            <path d="M11.5 18.9375H12.5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                            <path d="M4.56116 22.7812L2.90039 15.0938H21.0996L19.3696 22.7812" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                                            <line stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" x1="1" x2="23" y1="23.5" y2="23.5"></line>
                                        </g>
                                    </svg>
                                    <span class="text-rich-grey text-sm ">8 hours ago</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span class="text-rich-grey text-sm">Skills:</span>
                                    <div class="flex gap-1 text-sm font-normal text-black rounded-full ml-2 bg-grey">
                                        <a href="/it-jobs/javascript?click_source=Skill+tag" class="text-reset text-sm font-normal text-black rounded-full ml-2" data-controller="utm-tracking">
                                            <div class="bg-light-gray py-1 px-2 text-sm rounded-full">
                                                JavaScript
                                            </div>
                                        </a>
                                        <a href="/it-jobs/reactjs?click_source=Skill+tag" class="text-reset text-sm font-normal text-black rounded-full ml-2" data-controller="utm-tracking">
                                            <div class="bg-light-gray py-1 px-2 text-sm rounded-full">
                                                ReactJS
                                            </div>
                                        </a>
                                        <a href="/it-jobs/typescript?click_source=Skill+tag" class="text-reset text-sm font-normal text-black rounded-full ml-2" data-controller="utm-tracking">
                                            <div class="bg-light-gray py-1 px-2 text-sm rounded-full">
                                                TypeScript
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            </div>

                        </section>

                        <section class="reasons-join-us">
                            <h2 class="text-black font-bold text-2xl">Top 3 reasons to join us</h2>
                            <ul class="my-2 paragraph" >
                                <li class="py-1" style={{ color: "red" }}>Competitive salary &amp; up-to 16-month income / year</li>
                                <li class="py-1" style={{ color: "red" }}>Attractive allowances &amp; benefits</li>
                                <li class="py-1" style={{ color: "red" }}>Flexible working time with many company holidays</li>
                            </ul>
                        </section>
                        <section class="job-description">
                            <h2 class="text-black font-bold text-2xl">Job Description</h2>
                            <div class="paragraph">
                                <p><i><strong>We are hiring Senior Web developers who:</strong></i></p><ul>
                                    <li>Work closely with a Project Manager and the designers, other developers, and DevOps Engineers in each project.</li>
                                    <li>Analyze product requirements and specifications to create, communicate, and implement &amp;&nbsp;suggest the technical design. (Jira)</li>
                                    <li>Decide which technologies are going to be used in the project and define the overall architecture and layouts.</li>
                                    <li>Learn new technologies, languages, and techniques so that you are able to adapt to the requirements of the project.</li>
                                    <li>Collaborate with other team members to define the internal processes and initiatives to help the company accomplish its mission.</li>
                                </ul>
                            </div>
                        </section>

                        <section class="job-experiences">
                            <h2 class="text-black font-bold text-2xl mb-4">Your skills and experience</h2>
                            <div class="paragraph">
                                <p><i><strong>Web ( Senior - Open to Fullstack) :</strong></i></p><ul>
                                    <li>At least 5 years of experience in one of those Angular, Fluter, React JS, and Vue JS (using Typescript)</li>
                                    <li>Experience using NextJS Experience with web services and REST API implementation</li>
                                    <li>Good skills of Responsive and adaptive design Experience in cloud environments such as AWS EC2, S3, ELB, ETC.&nbsp;</li>
                                    <li>Experience with databases (MySQL, MongoDB, MSSQL) (basic)&nbsp;</li>
                                    <li>Experience in creating test code with Mocha, Jest, etc. (fluent is a plus) Be able to speak English (fluent is a plus)</li>
                                </ul>
                            </div>
                        </section>

                        <section class="job-why-love-working">
                            <h2 class="text-black font-bold text-2xl mb-4">Why you'll love working here</h2>
                            <div class="paragraph">
                                <ul>
                                    <li><span><strong>Very competitive salary, + 100% during the probation period</strong></span></li>
                                    <li><span><i><strong>13th salary</strong></i></span></li>
                                    <li><span><strong>Performance bonus based on the achievements</strong></span></li>
                                    <li><span><i><strong>1 extra company anniversary day off</strong></i></span></li>
                                    <li><span><i><strong>12 annual leave + 3 extra sick leave days per year</strong></i></span></li>
                                    <li><span><strong>1 day off for company anniversary day</strong></span></li>
                                    <li><span><strong>Join the dynamic, active, young, and friendly project team</strong></span></li>
                                    <li>
                                        <span><strong>Only work from Mon-Fri</strong></span><span><strong>&nbsp;</strong></span><span><strong>(8:00 ~ 17:00),</strong></span><span><strong>&nbsp;</strong></span><span><strong>off Sat &amp; Sun</strong></span>
                                    </li>
                                    <li><span><strong>Have a stable career path &amp; opportunity for higher position</strong></span></li>
                                    <li><span><strong>Great allowance (Free Snack, Coffee and drinks / Free Parking, etc)</strong></span></li>
                                    <li><span><strong>Workshop/ Year End Party/ Dinner Party/ Birthday Party</strong></span></li>
                                    <li><span><strong>Birthday gift with bonus</strong></span></li>
                                    <li><span><strong>Team building/ Year End Party</strong></span></li>
                                    <li><span><strong>Monthly Team Dinner / Birthday Party</strong></span></li>
                                    <li><span><strong>Football event&nbsp;</strong></span></li>
                                    <li><span><strong>Have an extra opportunity to work onsite in Korea</strong></span></li>
                                    <li><span><strong>Opportunity to challenge other business areas as a Global member&nbsp;</strong></span></li>
                                    <li><span><strong>Chance to become the&nbsp;leader of a dynamic and growing company.</strong></span></li>
                                </ul>
                            </div>
                        </section>
                        <section class="company-infos py-10">
                            <div class="flex items-baseline">
                                <h2 class="text-black font-bold text-2xl mb-4">BRICKMATE GROUP VIETNAM</h2>
                                <a href="/companies/brickmate-group-vietnam" target="_blank" class="ml-auto inline-flex items-center gap-1 text-nowrap">
                                    <span>View company</span>
                                    <svg class="feather-icon w-4 h-4">
                                        <use href="https://itviec.com/assets/feather-icons-sprite-520cd3770a1002f7c87bd1ba253464228ad112abb4c34d81c8cda9f937487a49.svg#external-link"></use>
                                    </svg>
                                </a>
                            </div>
                            <p class="text-black text-sm mt-2">BrickMate Group Vietnam</p>
                            <div class="grid grid-cols-3 mt-4">
                                <small class="text-black" style={{ color: "darkgrey" }}>Company type</small>
                                <small class="text-black" style={{ color: "darkgrey" }}>Company size</small>
                                <small class="text-black" style={{ color: "darkgrey" }}>Country</small>
                            </div>
                            <div class="grid grid-cols-3">
                                <small class="text-black">IT Outsourcing</small>
                                <small class="text-black">51-150</small>
                                <small class="text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="hidden">
                                        <symbol id="kr-flag" viewBox="0 0 512 512">

                                        </symbol>
                                    </svg>
                                    <div class="inline-block">

                                        <span class="align-middle">South Korea</span>
                                    </div>
                                </small>
                            </div>
                            <div class="grid grid-cols-3 mt-4">
                                <small class="text-black" style={{ color: "darkgrey" }}>Working days</small>
                                <small class="text-black" style={{ color: "darkgrey" }}>Overtime policy</small>
                                <small></small>
                            </div>
                            <div class="grid grid-cols-3">
                                <small class="text-black">Monday - Friday</small>
                                <small class="text-black">No OT</small>
                                <small></small>
                            </div>
                        </section>


                    </div>
                </div>



            </div>
        </Container>
    );
};

export default TopSearchSection;
