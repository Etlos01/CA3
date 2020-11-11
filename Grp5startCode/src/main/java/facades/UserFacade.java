package facades;

import dtos.UserDTO;
import entities.Role;
import entities.User;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import security.errorhandling.AuthenticationException;

public class UserFacade {

    private static EntityManagerFactory emf;
    private static UserFacade instance;

    private UserFacade() {
    }

    /**
     *
     * @param _emf
     * @return the instance of this facade.
     */
    public static UserFacade getUserFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new UserFacade();
        }
        return instance;
    }

    public User getVeryfiedUser(String username, String password) throws AuthenticationException {
        EntityManager em = emf.createEntityManager();
        User user;
        try {
            user = em.find(User.class, username);
            if (user == null || !user.verifyPassword(password)) {
                throw new AuthenticationException("Invalid user name or password");
            }
        } finally {
            em.close();
        }
        return user;
    }
    
    public UserDTO addUser(UserDTO u){
        EntityManager em = emf.createEntityManager();
        User user = new User(u.getFname(),u.getPassword());
        
        u.getRoles().forEach(role -> {user.addRole(new Role(role.getRoleName()));});
        try {
        em.getTransaction().begin();
        em.persist(user);
        em.getTransaction().commit();    
        } catch (Exception e) {
            
        } finally{
            em.close();
        }
        return u;
    }
   

}
