const e = React.createElement;
const root = document.getElementById('root');

const setClassToActive = item => {
    const items = document.querySelectorAll('.active');
    items.forEach( item => item.className = '')
    item.className = 'active';
}
// HOME SECTION
// **homeContent** 
const homeLi = document.getElementById('home');
homeLi.addEventListener('click', () => renderSection(Home));
const Home = () => {
    setClassToActive(homeLi);
    return (
        e('div', {id: 'homeDiv'},
            e('div', {id: 'profile'}, 
                e('img', {id:'profilePic',
                        src: 'images/profileNYC.png'
                        }, null)
            ), 
            e('h2', {className: 'greeting'}, homeContent.greeting),
            e('p', null, homeContent.message)
        ) // Main Div
    )
}

// SKILLS SECTION
// **skills**
const skillsLi = document.getElementById('skills');
skillsLi.addEventListener('click', () => renderSection(Skills));
const Skills = () => {
    setClassToActive(skillsLi);
    const keys = Object.keys(skills);
    return (
        e('div', {className: 'skillDiv'}, 
            keys.map( (key, index) => {
                return (
                    e('div', {key: key}, null, 
                        e('h4', null, skills[key].name),
                        e('div', {className: 'skillBar'}, 
                            e('div', {className: 'barSkill',
                                      style: {
                                          width: skills[key].rating + '%'
                                      }
                                    }, 
                                e('p', null, skills[key].rating + '%')
                            )    
                        ),
                        e('p', null, skills[key].level)
                    )
                )
            })
        )
    )
}

// EDUCATION
// **education** array
const educationLi = document.getElementById('education');
educationLi.addEventListener('click', () => renderSection(Education));
const getCourses = (courses) => {
    if(courses.length >= 1){
        console.log(courses)
        return (
            e('ul', null, 
                courses.map( (course,index) => {
                    return (
                        e('li', {key: index}, course.courseName + ' | ')
                    )
                })
            )
        )
    }
    return false;
}
const Education = () => {
    setClassToActive(educationLi);
    return (
        e('div', {className: 'educationDiv'},
            education.map( edu =>{
                if(edu.name === 'Austin Coding Academy'){
                    return (
                        e('div', {key: edu.name},
                            e('h3', null, edu.name),
                            e('h5', null, 'currently attending'),
                            e('p', null, `Location - ${edu.location}`),
                            getCourses(edu.courses)
                        )
                    )
                }
                return (
                    e('div', {key: edu.name},
                        e('h3', null, edu.name),
                        e('p', null, `Location - ${edu.location}`),
                        getCourses(edu.courses)
                    )
                )
            })
        )
    )
}





const renderSection = (section) => ReactDOM.render(section(), document.getElementById('root'));
renderSection(Home);
