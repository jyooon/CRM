<template>
  <dx-scheduler
    :data-source='getSchedulerData'
    :onAppointmentAdded='addData'
    :onAppointmentDeleted='deleteData'
  />
</template>

<script>
import { mapGetters } from 'vuex'
import DxScheduler from 'devextreme-vue/scheduler'
import Scheduler from 'devextreme/ui/scheduler'

var data2 = {
  'AppointmentId': 3,
  'Booker': '김나나',
  'Name': '가가가',
  'StartDate': '2019-02-20T10:30:00',
  'EndDate': '2019-02-20T11:00:00',
  'Memo': '추가추가',
  'Cost': 50
}

export default {
  name: 'Schedule',
  computed: {
    ...mapGetters([
      'getSchedulerData'
    ])
  },
  components: {
    DxScheduler
  },
  data () {
    return {
    }
  },
  methods: {
    data_print: function (event) {
      // console.log(data = data.concat(data2))
      this.$store.commit('addScheduler', data2)
      console.log(this.getSchedulerData)
    },
    handleFocusIn: (e) => {
      // console.log(e)
      console.log('click!!')
    },
    addData (e) {
      console.log(e.appointmentData)
      this.$store.dispatch('addSchedule', e.appointmentData)
    },
    deleteData: (e) => {
      console.log(e.appointmentData)
    }
  },
  created () {
    Scheduler.defaultOptions({
      device: { deviceType: 'desktop' },
      options: {
        currentDate: new Date(),
        currentView: 'day',
        startDayHour: 7,
        endDayHour: 20,
        textExpr: 'Memo',
        startDateExpr: 'StartDate',
        endDateExpr: 'endDate',
        descriptionExpr: 'Notes',
        height: 700,
        editing: {
          allowAdding: true,
          allowDeleting: true,
          allowDragging: false,
          allowResizing: false,
          allowUpdating: true
        },
        // appointmentTemplate: 'appointment-template',
        onAppointmentFormOpening: (data) => {
          var form = data.form
          form.option('items', [
            {
              dataField: 'Booker',
              editorType: 'dxTextBox',
              editorOptions: {
                width: '100%'
                // type: 'datetime'
              }
            },
            {
              dataField: 'StartDate',
              editorType: 'dxDateBox',
              editorOptions: {
                width: '100%',
                type: 'datetime'
              }
            },
            {
              name: 'EndDate',
              dataField: 'endDate',
              editorType: 'dxDateBox',
              editorOptions: {
                width: '100%',
                type: 'datetime'
              }
            },
            {
              dataField: 'price',
              editorType: 'dxRadioGroup',
              editorOptions: {
                dataSource: [5, 10, 15, 20],
                itemTemplate: (itemData) => {
                  return itemData
                }
              }
            },
            {
              dataField: 'Memo',
              editorType: 'dxTextBox',
              editorOptions: {
                width: '100%',
                type: 'required'
              }
            }
          ])
        }
        // onAppointmentFormCreated: function (e) {
        //   var form = e.form;
        //   form.itemOption('Memo',{
        //     validationRules: [{
        //       type: 'required',
        //       message: 'Description is required'
        //     }]
        //   })
        // }
      }
    })
  }
}
</script>
