const p = document.createElement('p');
p.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet officiis quisquam eveniet dignissimos, perspiciatis, impedit dicta soluta consequuntur delectus labore odio totam asperiores nihil eius dolorem accusantium sunt, explicabo ullam.";
p.style.border =  '1px solid red';
p.style.borderRadius = '20px';
p.style.margin = '0 auto';
p.style.width = '300px';
p.style.display = 'table';
p.style.textAlign = 'center';
p.style.padding = '10px';

const ul = document.createElement('ul');
const item_1 = document.createElement('li');
const item_2 = document.createElement('li');
const item_3 = document.createElement('li');
 
const intocode = document.createElement('a');
const vk = document.createElement('a');
const instagram = document.createElement('a');

vk.href = "https://www.youtube.com/watch?v=DuWyc76lYC4&t=607s";
instagram.href = "https://www.youtube.com/watch?v=DuWyc76lYC4&t=607s";
intocode.href = "https://www.youtube.com/watch?v=DuWyc76lYC4&t=607s";

instagram.textContent = "instagram";
vk.textContent = "vk";
intocode.textContent = "intocode";


item_1.prepend(intocode);
item_2.prepend(vk);
item_3.prepend(instagram);
ul.append(item_1, item_2, item_3);


document.body.prepend(ul);
document.body.prepend(p);

document.body.display = 'flex'
document.body.justifyContent = 'center'
ul.style.display = "flex";
ul.style.alignItems = "center";
ul.style.justifyContent = "space-between";
ul.style.marginTop = "10px";
ul.style.padding = "0px";
ul.style.listStyleType = "none";
ul.style.width = '500px'
ul.style.margin = 'auto'
ul.style.width = "20%"
