// Components
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { differenceInDays, differenceInHours } from 'date-fns';

// Assets
import CardBackgroundSVG from "@/assets/bg-top-emp.svg";
import { ChevronRight } from "lucide-react";

const JobCardDemo = ({ job }) => {
    const { id, title, company, working_model, location, level, skills, salary, description, country, working_days, overtime_policy, posted_day, expired_day } = job;
    // Ngày hiện tại
    const currentDate = new Date();
    // Ngày bạn muốn so sánh
    const targetDate = new Date(posted_day);

    // Tính khoảng cách giữa hai ngày
    const daysAgo = differenceInDays(currentDate, targetDate);
    const logo = "/company/logo-nab.webp";
    return (
        <Card className="bg-white p-2 m-2 flex flex-col rounded-lg relative" >
            <CardContent>
                <div class="ipy-2">
                    <div class="flex items-center justify-between relative">
                        <span class="text-sm text-dark-grey" style={{ color: "darkgrey" }}>
                            Posted {daysAgo} Day Ago
                        </span>
                    </div>
                    <h3 class="flex items-center justify-between relative mt-3 text-black font-bold"  >
                        {title}
                    </h3>
                </div>
            </CardContent>

            <CardContent>
                <div className="flex items-center">
                    <a target="_blank" title="" data-controller="utm-tracking tooltip" data-action="mouseover->tooltip#showTooltip click->tooltip#disposeTooltip" className="bg-white logo-employer-card" href="/companies/hsc?lab_feature=preview_jd_page" data-bs-original-title="Ho Chi Minh City Securities Corporation (HSC)">
                        <picture>
                            <source data-srcset="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNEszTWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--aeb63863939fc3f134b9ad60cdeb91c87b943e73/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcGFXbHAiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--20b0435834affc851fb8b496383cefc8135158a8/hsc-logo@3x.png" type="image/png" />
                            <img alt="HSC Vietnam Small Logo" className="rounded border-solid shadow-md lazyload" src={logo} data-src={logo} height="48" width="48" />
                        </picture>
                    </a>
                    <span className="ml-2 text-sm">
                        <a target="_blank" data-controller="utm-tracking" className="text-gray-600" href="/companies/hsc?lab_feature=preview_jd_page">{company.name}</a>
                    </span>

                </div>
                <div class="pt-2 font-semibold">
                    <div class="flex items-center text-green-600">
                        <svg fill="none" height="20" stroke="currentColor" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0044 6V18" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                            <path d="M14.9287 7.90332H10.5395C9.99625 7.90332 9.47527 8.11912 9.09114 8.50325C8.70701 8.88738 8.49121 9.40836 8.49121 9.9516C8.49121 10.4948 8.70701 11.0158 9.09114 11.4C9.47527 11.7841 9.99625 11.9999 10.5395 11.9999H13.4656C14.0088 11.9999 14.5298 12.2157 14.914 12.5998C15.2981 12.9839 15.5139 13.5049 15.5139 14.0482C15.5139 14.5914 15.2981 15.1124 14.914 15.4965C14.5298 15.8806 14.0088 16.0964 13.4656 16.0964H8.49121" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                            <circle cx="12.0002" cy="12.0002" r="9.3" stroke-width="2" stroke="currentColor"></circle>
                        </svg>
                        <span class="ml-2">{salary}</span>
                    </div>
                </div>


            </CardContent>

            <CardContent>
                <div class="flex items-center  text-sm">
                    <svg fill="none" height="16" viewBox="0 0 24 25" width="16" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_947_6633)">
                            <path d="M19 14.625C19 13.6967 18.6312 12.8065 17.9749 12.1501C17.3185 11.4937 16.4283 11.125 15.5 11.125H8.5C7.57174 11.125 6.6815 11.4937 6.02513 12.1501C5.36875 12.8065 5 13.6967 5 14.625" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                            <path d="M12 8.5C13.933 8.5 15.5 6.933 15.5 5C15.5 3.067 13.933 1.5 12 1.5C10.067 1.5 8.5 3.067 8.5 5C8.5 6.933 10.067 8.5 12 8.5Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                            <path d="M11.5 18.9375H12.5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                            <path d="M4.56116 22.7812L2.90039 15.0938H21.0996L19.3696 22.7812" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                            <line stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" x1="1" x2="23" y1="23.5" y2="23.5"></line>
                        </g>
                        <defs>
                            <clipPath id="clip0_947_6633">
                                <rect fill="white" height="24" transform="translate(0 0.5)" width="24"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    <span class="ml-2 text-black">
                        {working_model}
                    </span>
                </div>

                <div className="flex items-center text-black">
                    <svg fill="none" height="16" viewBox="0 0 24 25" width="16" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_947_6633)">
                            <path d="M19 14.625C19 13.6967 18.6312 12.8065 17.9749 12.1501C17.3185 11.4937 16.4283 11.125 15.5 11.125H8.5C7.57174 11.125 6.6815 11.4937 6.02513 12.1501C5.36875 12.8065 5 13.6967 5 14.625" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                            <path d="M12 8.5C13.933 8.5 15.5 6.933 15.5 5C15.5 3.067 13.933 1.5 12 1.5C10.067 1.5 8.5 3.067 8.5 5C8.5 6.933 10.067 8.5 12 8.5Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                            <path d="M11.5 18.9375H12.5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                            <path d="M4.56116 22.7812L2.90039 15.0938H21.0996L19.3696 22.7812" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"></path>
                            <line stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" x1="1" x2="23" y1="23.5" y2="23.5"></line>
                        </g>
                        <defs>
                            <clipPath id="clip0_947_6633">
                                <rect fill="white" height="24" transform="translate(0 0.5)" width="24"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    <span className="mt-0.5 text-sm text-black ml-2">
                        {location}
                    </span>
                </div>


            </CardContent>

            <CardContent>
                <div className="mb-2">


                    <div className="flex items-center itag itag-light itag-sm">
                        {skills.map((skill, index) => (
                            <Badge
                                key={index}
                                variant="secondary"
                                className="text-sm font-normal text-black rounded-full ml-2"
                            >
                                {skill}
                            </Badge>
                        ))}
                    </div>
                    {/* <Badge variant="secondary" className="text-sm font-normal">
    Java
</Badge> */}
                </div>
            </CardContent>

        </Card>
    );
};

export default JobCardDemo;
