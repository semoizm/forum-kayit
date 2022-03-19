module.exports = {
  name: "kayit",
  category: "Utility",
  description: "Kayıt Ol!",
  run: async (client, interaction) => {

const discordModals = require('discord-modals') 
discordModals(client); 

const { Modal, TextInputComponent, showModal } = require('discord-modals') 

const modal = new Modal() 
.setCustomId('modal-customid')
.setTitle('Sunucuya Kayıt Olmaya Ne Dersin!')
.addComponents(
  new TextInputComponent() 
  .setCustomId('textinput-customid')
  .setLabel('Kullanıcı Adı')
  .setStyle('SHORT') 
  .setMinLength(4)
  .setMaxLength(10)
  .setPlaceholder('Semih')
  .setRequired(true), 

  new TextInputComponent() 
  .setCustomId('textinput-customid2')
  .setLabel('Yaşınız')
  .setStyle('SHORT') 
  .setMinLength(1)
  .setMaxLength(2)
  .setPlaceholder('17')
  .setRequired(true), 


  new TextInputComponent() 
  .setCustomId('robotd')
  .setLabel('Robot Doğrulaması (2+2)')
  .setStyle('SHORT')
  .setMinLength(1)
  .setMaxLength(1)
  .setPlaceholder('Doğru cevabı giriniz')
  .setRequired(true),


  new TextInputComponent()
  .setCustomId('nerden')
  .setLabel('Bizi Nerden Buldunuz?')
  .setStyle('LONG') 
  .setMinLength(10)
  .setMaxLength(100)
  .setPlaceholder('Bir arkadaşım davet bağlantısı gönderdi.')
  .setRequired(false)
);



    showModal(modal, {
      client: client, 
   interaction: interaction 
    })




  },
};
