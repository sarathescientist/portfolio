new Vue ({
el: '#signup-form',
data: {
  name: 'blah',
  email: 'blah',
  subject: 'blah',
  message: 'blah'
},

methods: {
  processForm: function() {
    console.log({name: this.name, email: this.email, subject: this.subject, message: this.message});
    alert('Processing');
  }}
});
