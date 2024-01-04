import { createSelector } from "reselect";
import { AppRootState } from "../../../css/types/screen";
import { CommunityPage } from ".";

const selectCommunityPage = (state: AppRootState) => state.communityPage;
export const retrieveTargetBoArticles = createSelector(
    selectCommunityPage,
    (CommunityPage)=> CommunityPage.targetBoArticles
)