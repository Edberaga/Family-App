class Member {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    celebrateBirthday() {
        this.age++;
      }
    
    changeName(newName) {
        this.name = newName;
    }
}

const addNewFamilyMember = () => {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    family_member.push(new Member(name, age, gender));
    reloadFamilyMember();
}

const reloadFamilyMember = () => {
    const output = document.getElementById("output").tBodies[0];
    output.innerHTML = '';

    for(const member of family_member) {
        const row = document.createElement('tr');
        const index = family_member.indexOf(member);
        row.innerHTML = 
        `
        <td>${member.name}</td>
        <td>${member.age}</td>
        <td>${member.gender}</td>
        <td>
            <button onclick="celebrateBirthday(${index})">Add Age</button>
            <button onclick="changeName(${index})">Change Name</button>
        </td> 
        `;
        output.appendChild(row);
        console.log(`Name: ${member.name}, Age: ${member.age}, Gender: ${member.gender}`);
    }
}

function celebrateBirthday(index) {
    familyMembers[index].celebrateBirthday();
    reloadFamilyMembers();
}

function changeName(index) {
    const newName = prompt('Enter the new name:');
    if (newName) {
        familyMembers[index].changeName(newName);
        reloadFamilyMembers();
    }
}

const family_member = [
    new Member('John Doe', 30,'male'),
    new Member('Jane Smith', 25, 'female'),
    new Member('Bob Johnson', 28,'male')
];

reloadFamilyMember();

for(member of family_member) {
    console.log(`Name: ${member.name}, Age: ${member.age}, Gender: ${member.gender}`);
}