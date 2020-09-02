<template>
    <div>
        <v-card>
      
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">
                        headline
                    </h3>
                    <div>description</div>
                </div>
            </v-card-title>
                <v-data-table 
                :headers="headers" 
                :items="students" 
                class="elevation-1"
                loading="true"
                >
                   
                </v-data-table>

            <v-card-actions>
                <v-btn color="primary">text</v-btn>
                <v-btn  small color="primary">Logout</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            headers: [
                {text: 'Student Number',
                align: 'start',
                sortable: false,
                value: 'student_number',
                },
                { text: 'Name', value: 'name' },
                { text: 'Year', value: 'year' },
                { text: 'Section', value: 'section_id' },
                { text: 'Program', value: 'program_id' },
                { text: 'Campus', value: 'campus_id', sortable: false },
                { text: 'Activation Code', value: 'initial_password', sortable: false },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
        }
    },
    computed: {
        students(){
            return this.$store.getters.students;
        }
    },
    mounted() {
        if (this.students.length) {
            return;
        }
        this.$store.dispatch('getStudents');
    }
}
</script>