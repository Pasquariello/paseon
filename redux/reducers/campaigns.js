import {
	CAMPAIGN_DATA_LOADED,
	ADD_CAMPAIGN
} from "../actions/types";
  
const initialState = {
	data : []
};
  
export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
	case CAMPAIGN_DATA_LOADED:
		return {
			...state,
			data: [...payload]
        
		};
	case ADD_CAMPAIGN:         
		return {
			...state,
			data: [...state.data, payload]

		}
  
	default:
		return state;
	}
}