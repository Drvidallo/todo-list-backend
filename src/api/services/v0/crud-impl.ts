
import { getFirestore, collection, getDocs, getDoc, addDoc, setDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import  {app} from '../../dao/database-config'
import { post } from '../../dao/entity/post-class'
const db = getFirestore(app);


export class CrudService {

    public async getPost (): Promise<any> {
      const postArray:Array<post> = []
      const querySnapshot = await getDocs(collection(db, "todo"));
      if(querySnapshot.empty){
        console.log("The database is empty")
      } else {
        querySnapshot.docs.map((doc) => {
          const postObject = new post(
            doc.id,
            doc.data().title,
            doc.data().message
          )
          postArray.push(postObject)
        })
      }
      console.log("Posts retrieved")
      return postArray
      }

    public async addPost (title, message): Promise<any> {
        const newPost = doc(collection(db, "todo"));
        await setDoc(newPost, {
            title,
            message,
      });
      return "Add successful"
    }

    public async updatePost (id, title, message): Promise<any> {
      const updatePost = doc(db, "todo", id);

      await updateDoc(updatePost, {
        title: title,
        message: message,
      });
      return "Update successful"
    }

    public async deletePost (id): Promise<any> {
      await deleteDoc(doc(db, "todo", id));
      return "Add successful"
    }
    
  }
  