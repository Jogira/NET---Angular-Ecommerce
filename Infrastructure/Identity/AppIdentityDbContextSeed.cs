using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Vivi",
                    Email = "Vivi@test.com",
                    UserName = "Vivi@test.com",
                    Address = new Address
                    {
                        FirstName = "Vivi",
                        LastName = "Kuroki",
                        Street = "10 The Street",
                        City = "New York",
                        State = "NY",
                        ZipCode = "19284"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}