"use client";

import { useEffect } from "react";
import { useState } from "react";
import CountUp from "react-countup";


const API_URL = "https://s6n2lxybb7.execute-api.eu-west-1.amazonaws.com/visitors";

const Stats = () => {
    const [visitCount, setVisitCount] = useState(0);

    const stats = [
    {
        num: visitCount,
        text: "People Visited this site",
    },
    {
        num: 1,
        text: "Years of Experience",
    },
    {
        num: 4,
        text: "Projects Completed",
    },
    {
        num: 1,
        text: "Certifications",
    },
    // {
    //     num: 8,
    //     text: "Technologies mastered"
    // },
    // {
    //     num: 500,
    //     text: "Code committed",
    // }
    ];

    useEffect(() => {
        // This is to ensure that the CountUp animation restarts when the component is mounted
        const updateVisitorCount = async () => {
            try {
                await fetch(API_URL, { method: 'POST' });
                const res = await fetch(API_URL);
                const data = await res.json();
                console.log('Visitor count data:', data);
                setVisitCount(data.visit_count);
            } catch (error) {
                console.error('Error updating visitor count:', error);
            } finally {
                ""; // No action needed here;
            }
        };

        updateVisitorCount();
    }, []);
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index) => {
                    return (
                        <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                            <CountUp
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold text-red-300"
                            />
                            <p
                                className={`${
                                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                                }`}
                            >
                                {item.text}
                            </p>
                        </div>
                    )

                })
                }
            </div>
        </div>
    </section>
  )
}

export default Stats