import React from "react";
import { useState, useEffect } from "react";

const {remote} = require('electron')

import conf from "./../configs/conf";

const fs = window.require('fs');

const tokenPath = `${remote}/configs/token.json`;

const token = JSON.parse(fs.readFileSync(tokenPath));

function CourseList() {
    const [courseCovers, setCourseCovers] = useState({});

    // Fetch course covers from Classroom API
    useEffect(() => {
        async function fetchCourseCovers() {
            const apiResponse = await fetch(
                "https://classroom.googleapis.com/v1/courses",
                {
                    headers: {
                        Authorization: `Bearer ${token.access_token}`,
                    },
                }
            );
            const { courses } = await apiResponse.json();

            const covers = {};
            courses.forEach(course => {
                covers[course.id] =
                    course.courseState === "ACTIVE"
                        ? course.courseMaterialSets[0].materials[0].thumbnailUrl
                        : null;
            });

            setCourseCovers(covers);
        }

        fetchCourseCovers();
    }, []);

    return (
        <div>
            {conf.courses.map(course => (
                <div key={course.id}>
                    <h2>{course.name}</h2>
                    {courseCovers[course.id] && (
                        <img
                            src={courseCovers[course.id]}
                            alt={`${course.name} cover`}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

export default CourseList;