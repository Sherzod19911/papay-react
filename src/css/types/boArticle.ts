import { MeLiked } from "./product";
import { Member } from "./user";

export interface BoArticle {
  me_liked: any;
      _id: string,
       art_subject: string,
       art_content: string,
       art_image?: string | null;
       bo_id: string,
       art_status: string,
       art_likes: number,
       art_views: number,
       mb_id: string,
       createdAt: Date,
       updatedAt: Date,
       member_data: Member,
       mb_liked: MeLiked[];
 
}
export  interface SearchArticlesObj {
      bo_id: any;
      page: number,
      limit: number;
      order?: number | null;

}