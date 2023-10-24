import { serverSupabaseUser } from '#supabase/server';

export default defineEventHandler(async (event) => {
   let user;
   try {
      user = await serverSupabaseUser(event);
   } catch(error) {
      user = null;
   }
   event.context.user = user;
});
