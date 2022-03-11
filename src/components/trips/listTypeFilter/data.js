const listTypeFilterProps = {
  data: [
    {
      id: '1234',
      title: 'Ongoing',
    },
    {
      id: '2342',
      title: 'Upcoming',
    },
  ],
  selected: '1234',
  onChange: (item) => console.log(item),
};

export default listTypeFilterProps;
