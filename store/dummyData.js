export const searchData = () => {
    let data = [];

    for (let i = 1; i < 9; i++) {
        data.push({
            id: i,
            title: `Blockchain Couples Meetup ${i}`,
            sub_title: `Event Sub Title Event Sub Title Event Sub Title ${i}`,
            img: `/static/img/poster${i}.png`,
            description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <strong>Lorem Ipsum has been the industry's standard dummy text ever since</strong>
                  <p>the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                   <strong>remaining essentially unchanged.</strong>
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
`,
            short_description: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec
            vitae odio fringilla justo euismod
            suscipit vel in mauris. Suspendisse
            cursus viverra augue, vel pretium
            dolor tincidunt sit amet...`,
            attend_count: '123+',
            author: `Lucas Pachenko ${i}`,
            date: 'May 1st, 2019 - 1:23pm',
            location: 'Bitcoin Center, San Francisco, CA',
        });
    }

    return data;
};