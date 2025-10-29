import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";

import { AppRoutes } from "./app.rautes";

export function Routes(){
    // Verificando se o usuario esta logado
    // para caso seja necessario no futuro
    // para usar basta atualizar o estado de false para true, nesse exato momento não a necessidade de ter
    //      uma troca de rotas para logado ou não pois o login é internamente
    const [user, setUser] = useState(false);
    return(
        <NavigationContainer>
            {user? <AppRoutes/>:<AppRoutes/>}
        </NavigationContainer>
    );
}





