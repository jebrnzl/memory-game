const shuffle = () => {
    const assets = [
        { image: '/assets/chaos.png' },
        { image: '/assets/crazy.png' },
        { image: '/assets/droll.png'},
        { image: '/assets/jimbo.png' },
        { image: '/assets/jolly.png' },
        { image: '/assets/mad.png' },
        { image: '/assets/misprint.png'},
        { image: '/assets/zany.png' },
      ];

      return [...assets, ...assets]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));
}

export default shuffle;
