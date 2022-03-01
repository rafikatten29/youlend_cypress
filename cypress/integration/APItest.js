describe ('Tests on Reqres API', () => {

    it ('Test list users endpoint', () => {

        cy.request('GET', '/api/users',  { page: 2 }).then((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body).to.have.property('total', 12)
            expect(resp.body).to.have.property("per_page", 6)
        })
    })

    it ('Test single user endpoint', () => {
        cy.request('GET', '/api/users/2').then((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body).to.have.property('data')
            expect(resp.body).to.have.property("support")
        })
    })

    it ('Test creation of new user', () => {
        cy.request('POST', '/api/users', {
            "name": "morpheus",
            "job": "leader"
        }).then((resp) => {
            expect(resp.status).to.eq(201)
            expect(resp.body).to.have.property('name', 'morpheus')
            expect(resp.body).to.have.property('job', 'leader')
        })
    })

    it ('Test update of an user', () => {
        cy.request('PATCH', '/api/users/2', {
            "name": "morpheus",
            "job": "zion resident"
        }).then((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body).to.have.property('name', 'morpheus')
            expect(resp.body).to.have.property('job', 'zion resident')
        })
    })

    it ('Test delete of an user', () => {
        cy.request('DELETE', '/api/users/5').then((resp) => {
            expect(resp.status).to.eq(204)
        })
    })


})
