function init(){
    var myHeaders = new Headers({
        'Accept':'application/vnd.github.v3+json',
        'Authorization':'Bearer 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'
    });
    var headers = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

    getPersonalInfo(headers);
    getRepositories(headers)
}

async function getPersonalInfo(headers){
    let response = await fetch(`https://api.github.com/user`, headers);
    let data = await response.json();

    //modifying profile elements
    document.getElementById('postPic').src=`${data.avatar_url}`;
    document.getElementsByClassName('profileItem')[0].src=`${data.avatar_url}`;
    document.getElementsByClassName('profileItem')[1].innerHTML=`${data.name}`;

    //modifying information elements
    document.getElementsByClassName('infoList')[0].innerHTML=`${data.location}`;
    document.getElementsByClassName('infoList')[1].innerHTML=`${data.company}`;

    console.log(data);
};

async function getRepositories(headers){
    let response = await fetch(`https://api.github.com/users/GoldenTlmeLover/repos`, headers);
    let data = await response.json();

    document.getElementsByClassName('projectTitle')[0].getElementsByTagName('p')[0].innerText = `${data[0].name}`
    document.getElementsByClassName('projectTitle')[1].getElementsByTagName('p')[0].innerText = `${data[1].name}`

    console.log(data[0]);
};


init()