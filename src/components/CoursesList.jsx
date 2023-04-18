import React from "react";
import { useState, useEffect } from "react";

import conf from "./../configs/conf";

function CourseList() {

    return (
        <div>
            {conf.courses.map(course => (
                <div key={course.id}>
                    <h2>{course.name}</h2>
                </div>
            ))}
        </div>
    );
}

export default CourseList;