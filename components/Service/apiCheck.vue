<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" md="6" class="text-center py-16 offset-md-3">
        <label for="car-reg" class="text-h5 mx-auto"
          >Enter your car registration:</label
        >
        <v-text-field
          v-model="reg"
          name="car-reg"
          class="white--text mt-4 mx-auto"
          solo
          dense
          style="width: 500px"
        ></v-text-field>
        <v-btn
          color="secondary"
          x-large
          class="rounded-pill pa-6 mt-n3"
          style="width: 150px"
          @click.native="getReg(carInfo, motInfo, reg)"
          >Submit</v-btn
        >
      </v-col>
      <v-col v-if="view" cols="12" class="py-10">
        <v-row class="text-center">
          <v-col cols="12" md="4">
            <label for="car-reg" class="text-h5 mx-auto">Make:</label>
            <v-text-field
              :value="carInfo.CarMake.CurrentTextValue"
              name="car-reg"
              class="white--text mt-4 mx-auto"
              solo
              dense
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <label for="car-reg" class="text-h5 mx-auto">Model:</label>
            <v-text-field
              :value="carInfo.CarModel.CurrentTextValue"
              name="car-reg"
              class="white--text mt-4 mx-auto"
              solo
              dense
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <label for="car-reg" class="text-h5 mx-auto">Year:</label>
            <v-text-field
              :value="carInfo.RegistrationYear"
              name="car-reg"
              class="white--text mt-4 mx-auto"
              solo
              dense
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-if="view" cols="12">
        <v-row>
          <v-col cols="12" class="text-center">
            <v-btn
              color="secondary"
              x-large
              class="rounded-pill pa-md-6 mt-n3"
              @click.native="confirm"
              >Find a service</v-btn
            >
          </v-col>
          <ui-message :msg="msg"></ui-message>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const { DOMParser } = require('xmldom')
export default {
  props: {
    carData: {
      type: Object,
      default: () => ({}),
    },
    motData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      reg: '',
      view: false,
      msg: {
        status: false,
        message: '',
        type: '',
      },
      xml: '<?xml version="1.0" encoding="utf-8"?> <Vehicle xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://regcheck.org.uk"> <vehicleJson>{ "ABICode": "", "Description": "RENAULT CLIO DIESEL HATCHBACK - 1.5 dCi 90 Dynamique S MediaNav Energy 5dr", "RegistrationYear": "2014", "CarMake": { "CurrentTextValue": "RENAULT" }, "CarModel": { "CurrentTextValue": "CLIO DIESEL HATCHBACK - 1.5 dCi 90 Dynamique S MediaNav Energy 5dr" }, "BodyStyle": { "CurrentTextValue": "1.5 dCi 90 Dynamique S MediaNav Energy 5dr" }, "EngineSize": { "CurrentTextValue": "1500" }, "NumberOfDoors": { "CurrentTextValue": "5" }, "Transmission": { "CurrentTextValue": "Manual" }, "FuelType": { "CurrentTextValue": "Diesel" }, "MakeDescription": { "CurrentTextValue": "RENAULT" }, "ModelDescription": { "CurrentTextValue": "CLIO DIESEL HATCHBACK - 1.5 dCi 90 Dynamique S MediaNav Energy 5dr" }, "Immobiliser": { "CurrentTextValue": "" }, "NumberOfSeats": { "CurrentTextValue": "5" }, "IndicativeValue": { "CurrentTextValue": 0 }, "DriverSide": { "CurrentTextValue": "" }, "VehicleInsuranceGroup": 12, "VehicleInsuranceGroupOutOf": 20, "VehicleIdentificationNumber": "VF15RFL0H51334416", "EngineCode": "", "EngineNumber": "", "Colour": "Black", "ImageUrl": "https://www.regcheck.org.uk/image.aspx/@UkVOQVVMVCBDTElPIERJRVNFTCBIQVRDSEJBQ0sgLSAxLjUgZENpIDkwIER5bmFtaXF1ZSBTIE1lZGlhTmF2IEVuZXJneSA1ZHI=" }</vehicleJson> <vehicleData> <Description>RENAULT CLIO DIESEL HATCHBACK - 1.5 dCi 90 Dynamique S MediaNav Energy 5dr</Description> <RegistrationYear>2014</RegistrationYear> <CarMake> <CurrentTextValue>RENAULT</CurrentTextValue> </CarMake> <BodyStyle> <CurrentTextValue>1.5 dCi 90 Dynamique S MediaNav Energy 5dr</CurrentTextValue> </BodyStyle> <EngineSize> <CurrentValue>1500</CurrentValue> </EngineSize> <NumberOfDoors> <CurrentValue>5</CurrentValue> </NumberOfDoors> <Transmission> <CurrentTextValue>Manual</CurrentTextValue> </Transmission> <FuelType> <CurrentTextValue>Diesel</CurrentTextValue> </FuelType> <MakeDescription>RENAULT</MakeDescription> <ModelDescription>CLIO DIESEL HATCHBACK - 1.5 dCi 90 Dynamique S MediaNav Energy 5dr</ModelDescription> </vehicleData> </Vehicle>',
      motxml:
        '<?xml version="1.0" encoding="utf-8"?> <UKMOTData xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://regcheck.org.uk"> <Tests> <UKTest> <TestDate>2021.07.20 10:12:36</TestDate> <ExpiryDate>2022.07.19</ExpiryDate> <Result>Pass</Result> <Odometer>44097</Odometer> <TestNumber>937810951043</TestNumber> <FailureReasons /> <Advisories /> </UKTest> <UKTest> <TestDate>2020.08.28 09:54:09</TestDate> <ExpiryDate>2021.09.10</ExpiryDate> <Result>Pass</Result> <Odometer>41631</Odometer> <TestNumber>281294026288</TestNumber> <FailureReasons /> <Advisories /> </UKTest> <UKTest> <TestDate>2019.09.04 13:13:17</TestDate> <ExpiryDate>2020.09.10</ExpiryDate> <Result>Pass</Result> <Odometer>34723</Odometer> <TestNumber>297344345308</TestNumber> <FailureReasons /> <Advisories /> </UKTest> <UKTest> <TestDate>2018.09.11 09:09:56</TestDate> <ExpiryDate>2019.09.10</ExpiryDate> <Result>Pass</Result> <Odometer>24381</Odometer> <TestNumber>234807990664</TestNumber> <FailureReasons /> <Advisories /> </UKTest> </Tests> <taxDate>01 Sep 2021</taxDate> <Json>[ { "TestDate": "2021.07.20 10:12:36", "ExpiryDate": "2022.07.19", "Result": "Pass", "Odometer": "44097", "TestNumber": "937810951043", "FailureReasons": [], "Advisories": [] }, { "TestDate": "2020.08.28 09:54:09", "ExpiryDate": "2021.09.10", "Result": "Pass", "Odometer": "41631", "TestNumber": "281294026288", "FailureReasons": [], "Advisories": [] }, { "TestDate": "2019.09.04 13:13:17", "ExpiryDate": "2020.09.10", "Result": "Pass", "Odometer": "34723", "TestNumber": "297344345308", "FailureReasons": [], "Advisories": [] }, { "TestDate": "2018.09.11 09:09:56", "ExpiryDate": "2019.09.10", "Result": "Pass", "Odometer": "24381", "TestNumber": "234807990664", "FailureReasons": [], "Advisories": [] } ]</Json> <ExtendedInformation> <ArrayOfString> <string>make</string> <string>RENAULT</string> </ArrayOfString> <ArrayOfString> <string>model</string> <string /> </ArrayOfString> <ArrayOfString> <string>registration</string> <string>01 Sep 2014</string> </ArrayOfString> <ArrayOfString> <string>(cc)</string> <string>1461cc</string> </ArrayOfString> <ArrayOfString> <string>Emissions</string> <string>90 g/km</string> </ArrayOfString> <ArrayOfString> <string>type</string> <string>Car</string> </ArrayOfString> <ArrayOfString> <string>marker</string> <string /> </ArrayOfString> <ArrayOfString> <string>status</string> <string>Taxed</string> </ArrayOfString> <ArrayOfString> <string>colour</string> <string>BLACK</string> </ArrayOfString> <ArrayOfString> <string>approval</string> <string>M1</string> </ArrayOfString> <ArrayOfString> <string>weight</string> <string>Not available</string> </ArrayOfString> </ExtendedInformation> <ExtendedInformationJson>[ [ "make", "RENAULT" ], [ "model", "" ], [ "registration", "01 Sep 2014" ], [ "(cc)", "1461cc" ],[ "Emissions", "90 g/km" ],[ "type", "Car" ], [ "marker", "" ], [ "status", "Taxed" ], [ "colour", "BLACK" ], [ "approval", "M1" ], [ "weight", "Not available" ] ]</ExtendedInformationJson> </UKMOTData>',
    }
  },
  computed: {
    carInfo: {
      get() {
        return this.carData
      },
      set(newValue) {
        this.$emit('update:carData', newValue)
      },
    },
    motInfo: {
      get() {
        return this.motData
      },
      set(newValue) {
        this.$emit('update:motData', newValue)
      },
    },
    mobile() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return true
        case 'sm':
          return true
        default:
          return false
      }
    },
  },
  methods: {
    getReg(carInfo, motInfo, reg) {
      const url = 'http://www.regcheck.org.uk/api/reg.asmx/Check'

      const params = new URLSearchParams()
      params.append('username', 'ParkerClassic')
      params.append('RegistrationNumber', reg)

      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }

      this.$axios
        .post(url, params, config)
        .then((response) => {
          const car = this.convertCarXML(response.data)
          car.reg = reg
          this.carInfo = car
          console.log('carData -----> ', this.carInfo)
          return car
        })
        .then((car) => {
          const url = 'http://www.regcheck.org.uk/api/reg.asmx/UKMOT'

          console.log(car)

          const params = new URLSearchParams()
          params.append('username', 'ParkerClassic')
          params.append('RegistrationNumber', reg)
          params.append('Model', car.CarModel.CurrentTextValue)

          const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }

          this.$axios
            .post(url, params, config)
            .then((response) => {
              const mot = this.convertMotXML(response.data)
              this.motInfo = mot
              console.log('MotData -----> ', this.motInfo)
              this.view = true
            })
            .catch((error) => {
              this.msg = {
                type: 'error',
                message: error.message,
                status: true,
              }
            })
        })
        .catch((error) => {
          this.msg = {
            type: 'error',
            message: error.message,
            status: true,
          }
        })
    },
    convertCarXML(xml) {
      const doc = new DOMParser().parseFromString(xml)
      const data = JSON.parse(doc.childNodes[2].childNodes[1].firstChild.data)

      return data
    },
    convertMotXML(xml) {
      const doc = new DOMParser().parseFromString(xml)
      const nodes = doc.lastChild.childNodes
      const tests = JSON.parse(nodes[5].firstChild.data)
      const taxDate = nodes[3].firstChild.data
      const extrainfo = JSON.parse(nodes[9].firstChild.data)

      const data = {
        tests,
        taxDate,
        extrainfo,
      }

      return data
    },
    confirm() {
      this.$emit('update:confirm', true)
      this.reg = this.carInfo.reg
    },
    decline() {
      this.reset()
    },
    reset() {
      this.$emit('update:data', {})
      this.view = false
    },
  },
}
</script>
