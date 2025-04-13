
import { errors } from '@strapi/utils';
const { ApplicationError } = errors;
export default  {

    async beforeCreate(event) {
        console.log("beforeUpdate lifecycle called!");
        const { data } = event.params;
            // Règle 1 : Un seul anime peut être "vedette"
            console.log(data)
    if (data.category === "vedette") {
        const existingFeatured = await strapi.entityService.findMany("api::anime.anime", {
          filters: { category: "vedette" },
        });
  
        if (existingFeatured.length > 1) {
          throw new ApplicationError("Il ne peut y avoir qu'un seul anime vedette.");
        }
      }
  
      // Règle 2 : Si "recommande", le champ gif est obligatoire
      if (data.category === "recommande" && !data.gif) {
        throw new ApplicationError("Le champ GIF est obligatoire pour un anime recommandé.");
      }
      
    },
    async beforeUpdate(event) {
        debugger;

        console.log("beforeUpdate lifecycle called!");
        const { data, where } = event.params
        if (data.category === "vedette") {
            const existingFeatured = await strapi.entityService.findMany("api::anime.anime", {
                filters: { category: "vedette", id: { $ne: where.id } },
            });

            if (existingFeatured.length > 1) {
                throw new ApplicationError("Il ne peut y avoir qu'un seul anime vedette.");
            }
            if(data.category === "vedette" && !data.gif ){
                throw new ApplicationError("Le champ GIF est obligatoire pour un anime vedette.");
            }
        }

        // Règle 2 : Si "recommande", le champ gif est obligatoire
        if (data.category === "recommande" && !data.gif) {
            throw new ApplicationError("Le champ GIF est obligatoire pour un anime recommandé.");
        }
    },

}

  

