new Vue ({
el: '#one',
data: {
    title: 'Community environmental health',
    subtitle: 'Bringing low cost environmental tools to underserved communities throughout New England and New York',
    bio: 'Scientist, coder, community advocate',
    quote: 'blah',
    subtitle2: 'blah'
}
});

new Vue ({
    el: '#clapper',
    data() {
        return {
            // putting return in the data here allows counter to be changed by Vue rather than staying the same
            //variable
            counter: 0,
            //variable
          }
        },
        methods: { 
            increment: function () { 
              this.counter = this.counter + 1;
              ; //this. means we are referring to a variable inside of Vue. 
            },
          }
        });