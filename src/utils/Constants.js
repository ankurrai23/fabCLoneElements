export const PICKER_TYPE = {
  CAMERA: 'CAMERA',
  GALLERY: 'GALLERY',
  FILE_MANAGER: 'FILE_MANAGER',
};

export const TRIP_TYPE = {
  ONEWAY: 0,
  ROUND_TRIP: 1,
  MULTI_CITY: 2,
};

export const TRIP_STATUS = {
  APPROVAL_PENDING: 'APPROVAL_PENDING',
  APPROVED: 'APPROVED',
  IN_SHORTLISTING: 'IN_SHORTLISTING',
  PROCESSING: 'PROCESSING',
  PROCESSED: 'PROCESSSED',
  CANCELLATION_REQUESTED: 'CANCELLATION_REQUESTED',
  CANCELLED: 'CANCELLED',
};

export const SUB_TRIP_TYPE = {
  HOTEL: 'HOTEL',
  FLIGHT: 'FLIGHT',
  CAB: 'CAB',
  BUS: 'BUS',
  TRAIN: 'TRAIN',
};

export const EMPLOYEE_ACTIONS = {
  SEND_REMINDER: 'SEND_REMINDER',
};

export const MANAGER_APPROVAL_STATUS = {
  approvalPending: 'APPROVAL_PENDING',
  approved: 'APPROVED',
  rejected: 'REJECTED',
  modificationRequested: 'MODIFICATION_REQUESTED',
};

export const TRIP_CREATION_ACTIONS = [
  {
    type: 'EDIT',
    name: 'Edit',
  },
  {
    type: 'REMOVE',
    name: 'Remove',
  },
];

export const MEAL_TYPE = {
  FREE: 'FREE',
  PAID: 'PAID',
};
