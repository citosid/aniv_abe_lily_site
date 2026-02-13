document.addEventListener('alpine:init', () => {
  Alpine.data('seatingChart', () => ({
    query: '',
    guests: [
      // Table 1
      { name: 'Ashley Campos', table: 'Table 1' },
      { name: 'Deidi Campos', table: 'Table 1' },
      { name: 'Antonio Campos', table: 'Table 1' },
      { name: 'Ramon Colon', table: 'Table 1' },
      { name: 'Cynthia Colon', table: 'Table 1' },
      { name: 'Meli Gervacio', table: 'Table 1' },
      { name: 'Daniel Maciel', table: 'Table 1' },
      { name: 'Belinda Maciel', table: 'Table 1' },
      // Table 2
      { name: 'Johny Cordero', table: 'Table 2' },
      { name: 'Elizabeth Cordero', table: 'Table 2' },
      { name: 'Laura Vergara', table: 'Table 2' },
      { name: 'Josh Vergara', table: 'Table 2' },
      { name: 'Alex Hernandez', table: 'Table 2' },
      { name: 'Jenny Hernandez', table: 'Table 2' },
      { name: 'Kevin Zeledon', table: 'Table 2' },
      { name: 'Andrea Zeledon', table: 'Table 2' },
      // Table 3
      { name: 'Eunice Chavez', table: 'Table 3' },
      { name: 'Matt Chavez', table: 'Table 3' },
      { name: 'Jordan Rumph', table: 'Table 3' },
      { name: 'Elise Rumph', table: 'Table 3' },
      { name: 'Salvador Fernandez', table: 'Table 3' },
      { name: 'Silvia Fernandez', table: 'Table 3' },
      { name: 'Alan Fernandez', table: 'Table 3' },
      { name: 'Liliana Herrera', table: 'Table 3' },
      // Table 4
      { name: 'Gisella Cherise', table: 'Table 4' },
      { name: 'Andy Cherise', table: 'Table 4' },
      { name: 'Martin Rico', table: 'Table 4' },
      { name: 'Paola Rico', table: 'Table 4' },
      { name: 'Martincito Rico', table: 'Table 4' },
      { name: 'Pamela Rico', table: 'Table 4' },
      { name: 'Carlos Guillén', table: 'Table 4' },
      { name: 'Mariana Guillén', table: 'Table 4' },
      // Table 5
      { name: 'Alani Alvarado', table: 'Table 5' },
      { name: 'Yessica Montero', table: 'Table 5' },
      { name: 'Eileen Montero', table: 'Table 5' },
      { name: 'Ethan Montero', table: 'Table 5' },
      { name: 'Renato Araujo', table: 'Table 5' },
      { name: 'Bruna Araujo', table: 'Table 5' },
      { name: 'Jose Barrantes', table: 'Table 5' },
      { name: 'Lorena Barrantes', table: 'Table 5' },
      // Table 6
      { name: 'Kim Ebeling', table: 'Table 6' },
      { name: 'John Ebeling', table: 'Table 6' },
      { name: 'Josean Arroyo', table: 'Table 6' },
      { name: 'Mariselle Arroyo', table: 'Table 6' },
      { name: 'Beth Ferguson', table: 'Table 6' },
      { name: 'Edit Flores', table: 'Table 6' },
      { name: 'William Coronel', table: 'Table 6' },
      { name: 'Rosa Coronel', table: 'Table 6' },
      // Table 7
      { name: 'Tiffany Eno', table: 'Table 7' },
      { name: 'Caleb Eno', table: 'Table 7' },
      { name: 'Keziah Ramirez', table: 'Table 7' },
      { name: 'Cesar Hernandez', table: 'Table 7' },
      { name: 'Emilyanne Montesdeoca', table: 'Table 7' },
      { name: 'Dan Montesdeoca', table: 'Table 7' },
      // Table 8
      { name: 'Jonathan Ienco', table: 'Table 8' },
      { name: 'Melisa Ienco', table: 'Table 8' },
      { name: 'Jorge Islas', table: 'Table 8' },
      { name: 'Abby Islas', table: 'Table 8' },
      { name: 'Tabata Madrigal', table: 'Table 8' },
      { name: 'Juan Olortegui', table: 'Table 8' },
      { name: 'Nicte Olortegui', table: 'Table 8' },
      // Table 9
      { name: 'Gaby Rodriguez', table: 'Table 9' },
      { name: 'Nadia Smith', table: 'Table 9' },
      { name: 'Javan Pittsenbarger', table: 'Table 9' },
      { name: 'Lily Saucedo', table: 'Table 9' },
      { name: 'Ismael Garcia', table: 'Table 9' },
      { name: 'Jessica Garcia', table: 'Table 9' },
      { name: 'Daniel Ramos', table: 'Table 9' },
      { name: 'Daneris Ramos', table: 'Table 9' },
      // Table 10
      { name: 'Argiery Copin', table: 'Table 10' },
      { name: 'Jean Copin', table: 'Table 10' },
      { name: 'Sophie Copin', table: 'Table 10' },
      { name: 'Vale Copin', table: 'Table 10' },
      { name: 'Max Copin', table: 'Table 10' },
      { name: 'Gus de la Mora', table: 'Table 10' },
      { name: 'Karleigh de la Mora', table: 'Table 10' },
      { name: 'Silas de la Mora', table: 'Table 10' },
    ],

    get filteredGuests() {
      if (!this.query.trim()) return [];
      const q = this.normalize(this.query);
      return this.guests.filter(g => this.normalize(g.name).includes(q));
    },

    normalize(str) {
      return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    },

    get showNoResults() {
      return this.query.trim().length > 0 && this.filteredGuests.length === 0;
    }
  }));
});
