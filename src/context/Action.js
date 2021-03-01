import * as actionType from './ActionType'

export const Loads_All_Albums = () => {
    return {
        type : actionType.Load_All_Albums ,
    }
}
export const Add_New_Albums = (album) => {
    return {
        type : actionType.Add_New_Albums ,
        album
    }
}
export const Delete_Albums = (id) => {
    return {
        type : actionType.Delete_Album ,
        id
    }
}
export const Edit_Albums = (id) => {
    return {
        type : actionType.Edit_Album ,
        id
    }
}