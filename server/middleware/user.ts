import { serverSupabaseUser } from '#supabase/server';

export default defineEventHandler(async (event) => {
   let user;
   // Use a try catch. The catch will be triggered if the user is not logged in
   try {
      user = await serverSupabaseUser(event);
   } catch(error) {
      user = null;
   }
   event.context.user = user;
});
