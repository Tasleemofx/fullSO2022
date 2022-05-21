import React from 'react';

const Course=({course})=>{
        const courseList = course.map((coursename)=>{
        return(
                <li key={coursename.id}>{coursename.name}       {coursename.exercises}</li>
       )
        })
        return (
                <>
                
                <ul>{courseList}</ul>
                
                </>
        )
}


export default Course;