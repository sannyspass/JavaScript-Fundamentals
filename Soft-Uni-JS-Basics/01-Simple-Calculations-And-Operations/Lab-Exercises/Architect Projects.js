/*5. Изготвяне на проекти.
Напишете програма, която изчислява колко часове ще са необходими на един архитект, за да изготви проектите на няколко строителни обекта. 
Изготвянето на един проект отнема приблизително три часа.*/

function architectProjects(nameArchitect, projects) {
  let projectTime = projects * 3;
  console.log(
    `The architect ${nameArchitect} will need ${projectTime} hour/s to complete ${projects} project/s.`
  );
}

architectProjects("Sanny", 2);
