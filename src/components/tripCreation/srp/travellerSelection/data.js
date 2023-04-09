import {FLIGHT_ADD_ON_TYPES} from '../../../../utils/Utils';

const travellerSelectionProps = {
  onClick: (index, onRemoveClicked) => {
    console.log(index, onRemoveClicked);
  },
  activeStoppage: 0,
  activeAddOnType: FLIGHT_ADD_ON_TYPES.SEAT,
  travellersInfo: [
    {
      email: 'vijay.singh@fabmailers.in',
      fullName: 'Vijay Singh',
      passengerId: '066cb327-b676-462a-b822-18c3758781aa',
      isSelected: false,
      seatDetails: [
        {
          origin: 'DEL',
          destination: 'BOM',
          seatInfo: {
            airlineCode: 'SG',
            flightNumber: '8709',
            price: 999.0,
            origin: 'DEL',
            destination: 'BOM',
            craftType: 'B-737-700 (149) (SLA)',
            availablityType: 1,
            description: 2,
            code: '1A',
            rowNo: '1',
            seatNo: 'A',
            seatType: 1,
            seatWayType: 1,
            compartment: 1,
            deck: 1,
            currency: 'INR',
            colorCode: '#C3E1FF',
          },
        },
        {
          origin: 'BOM',
          destination: 'MAA',
          seatInfo: {
            airlineCode: 'SG',
            flightNumber: '611',
            price: 999.0,
            origin: 'BOM',
            destination: 'MAA',
            craftType: 'B-737-800 (Y189)SGH',
            availablityType: 1,
            description: 2,
            code: '1A',
            rowNo: '1',
            seatNo: 'A',
            seatType: 1,
            seatWayType: 1,
            compartment: 1,
            deck: 1,
            currency: 'INR',
            colorCode: '#C3E1FF',
          },
        },
      ],
      mealDetails: [
        {
          origin: 'DEL',
          destination: 'BOM',
          nonLccMeals: null,
          mealInfos: [
            {
              airlineCode: 'SG',
              flightNumber: '8709',
              mealType: 'PAID',
              mealPlan: 'VEG',
              mealCode: 'VCC6',
              mealDescription: 'Vegetable Daliya',
              quantity: 1,
              price: 300.0,
              origin: 'DEL',
              destination: 'BOM',
            },
          ],
        },
        {
          origin: 'BOM',
          destination: 'MAA',
          nonLccMeals: null,
          mealInfos: [
            {
              airlineCode: 'SG',
              flightNumber: '611',
              mealType: 'PAID',
              mealPlan: 'NON_VEG',
              mealCode: 'NVML',
              mealDescription:
                'Fried egg on buttered bun with cheesy chicken croquette and oven roasted cajun potatoes. ',
              quantity: 1,
              price: 275.0,
              origin: 'BOM',
              destination: 'MAA',
            },
          ],
        },
      ],
      baggageDetails: [],
    },
    {
      email: 'west@fabmailers.in',
      fullName: 'North west',
      isSelected: false,
      passengerId: '66616699-0f75-4738-96d7-df0cf5cdccfe',
      seatDetails: [],
      mealDetails: [],
      baggageDetails: [],
    },
    {
      email: 'dest@fabmailers.in',
      fullName: 'Test name',
      isSelected: true,
      passengerId: '4719f559-2a5c-478d-859c-9de449d0ef9f',
      seatDetails: [],
      mealDetails: [],
      baggageDetails: [],
    },
  ],
};

export default travellerSelectionProps;
